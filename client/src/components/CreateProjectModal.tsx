import React, { useState } from "react";
import { useTrustLancerProgram } from "../anchor/useTrustLancerProgram";
import { useWallet } from "@solana/wallet-adapter-react";
import { PublicKey, SystemProgram } from "@solana/web3.js";
import { BN } from "@coral-xyz/anchor";
import { X } from "lucide-react";

interface CreateProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const CreateProjectModal: React.FC<CreateProjectModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const { program } = useTrustLancerProgram();
  const { publicKey } = useWallet();
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    budget: "",
    deadline: "",
    milestones: "3", // Default
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!program || !publicKey) return;

    setLoading(true);
    try {
      // 1. Prepare Data
      const budget = new BN(parseFloat(formData.budget) * 1_000_000); // 6 decimals for example (USDC-like) or 9 for SOL? Assuming Lamports? Project usually allows token mint, but native transfer implementation used system program?
      // Checking backend implementation: It used `transfer` from `user` to `escrow`. 
      // Wait, `create_project.rs` usually transfers funds to escrow.
      // I'll assume standard lamports (9 decimals) for now or just raw inputs. 
      // Let's assume input is in SOL, so * 1e9.
      const budgetLamports = new BN(parseFloat(formData.budget) * 1_000_000_000);

      const deadlineTs = new BN(Math.floor(new Date(formData.deadline).getTime() / 1000));
      const milestoneCount = parseInt(formData.milestones);
      
      // Mock Description Hash (32 bytes)
      const descHash = new Uint8Array(32).fill(1); // Real app would hash the description string

      // 2. Derive PDAs (Optional: Anchor resolves some, but sometimes helpful to know)
      // We don't need to pass PDAs explicitly if using .accounts() with Seeds, Anchor handles it mostly if we provide required signers/inputs.
      // But we generally need keypairs for new accounts if they are not PDAs. 
      // `project` is a PDA seeded by `[b"project", project_id]`.
      // Wait, how do we get a unique project_id? 
      // In `create_project` instruction, usually we pass `global_state` to get the incrementing ID or random?
      // Checking IDL accounts for `createProject`: `globalState`, `project`, `client`, `systemProgram`.
      // `project` seeds: `[b"project", project.project_id]`.
      // Wait, the seed DEPENDS on `project.project_id`? This implies `project` account must store its ID. 
      // But we need to find the address BEFORE creating it.
      // Usually there is a `globalState` that tracks `total_projects` and we use that as the ID? 
      // Or the client generates a random ID?
      // Let's check `TrustLancer_protocol.ts` again. 
      // The `project` pda seeds use `path: "project.project_id"`. This is weird for a Create instruction.
      // Ah, usually it's `[b"project", id_arg]`. 
      // Let's check `args` of `createProject`.
      // Args: `title`, `descriptionHash`, `totalBudget`, `milestoneCount`, `deadline`, `category`.
      // NO ID ARGUMENT? 
      // Then the ID comes from `globalState`. 
      // If the ID comes from `globalState`, then the `project` PDA cannot be derived client-side deterministically WITHOUT knowing the current count from `globalState`.
      // So I must fetch `globalState` first to get `total_projects` (or similar counter).
      
      // Let's Assume I need to fetch Global State.
      // `initialize` created `globalState` at `[b"global_state"]`.
      
      const [globalStatePda] = PublicKey.findProgramAddressSync(
          [Buffer.from("global_state")],
          program.programId
      );
      
      const globalStateAccount = await program.account.globalState.fetch(globalStatePda);
      const projectId = globalStateAccount.totalProjects; // Assuming this field exists (usually u64)
      
      // Derive Project PDA
      const [projectPda] = PublicKey.findProgramAddressSync(
          [Buffer.from("project"), projectId.toArrayLike(Buffer, "le", 8)],
          program.programId
      );

      // 3. Send Transaction
      const tx = await program.methods
        .createProject(
            formData.title,
            Array.from(descHash),
            budgetLamports,
            milestoneCount,
            deadlineTs,
            0 // Category 0 for now
        )
        .accounts({
            globalState: globalStatePda,
            project: projectPda,
            client: publicKey,
        })
        .rpc();

      console.log("Transaction Signature:", tx);
      alert("Project Created! Tx: " + tx);
      onSuccess();
      onClose();
    } catch (err) {
      console.error("Failed to create project:", err);
      alert("Error creating project. See console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-lg p-6 w-full max-w-lg relative border border-gray-700">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-6 text-white">Create New Project</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Project Title</label>
            <input 
              name="title" 
              value={formData.title} 
              onChange={handleChange}
              className="w-full bg-gray-900 border border-gray-700 rounded p-2 text-white focus:border-blue-500 outline-none"
              required 
            />
          </div>
          
          <div>
            <label className="block text-sm text-gray-400 mb-1">Description</label>
            <textarea 
              name="description" 
              value={formData.description} 
              onChange={handleChange}
              className="w-full bg-gray-900 border border-gray-700 rounded p-2 text-white focus:border-blue-500 outline-none h-24"
              required 
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Budget (SOL)</label>
              <input 
                name="budget" 
                type="number" 
                step="0.1"
                value={formData.budget} 
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded p-2 text-white focus:border-blue-500 outline-none"
                required 
              />
            </div>
            <div>
                 <label className="block text-sm text-gray-400 mb-1">Deadline</label>
                 <input 
                    name="deadline" 
                    type="date" 
                    value={formData.deadline} 
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-700 rounded p-2 text-white focus:border-blue-500 outline-none"
                    required 
                  />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded transition-colors disabled:opacity-50 mt-6"
          >
            {loading ? "Creating on Solana..." : "Create Project"}
          </button>
        </form>
      </div>
    </div>
  );
};
