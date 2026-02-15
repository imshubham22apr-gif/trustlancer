"use client";

import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import * as anchor from "@coral-xyz/anchor";
import { useMemo } from "react";

// You would typically import the IDL here
// import IDL from '@/protocol/idl';

const PROGRAM_ID = new anchor.web3.PublicKey(
  "H4R1nUBp4Gfuw9uPZwfrKyTVgP3TrQ2RzMD1puWjqYsY",
);

export function useProgram() {
  const { connection } = useConnection();
  const wallet = useAnchorWallet();

  const program = useMemo(() => {
    if (!wallet) return null;

    const provider = new anchor.AnchorProvider(
      connection,
      wallet,
      anchor.AnchorProvider.defaultOptions(),
    );

    // Mock program interface for now - needs actual IDL
    // return new anchor.Program(IDL, PROGRAM_ID, provider);

    // Returning a dummy object that matches usage in CreateProjectForm
    return {
      programId: PROGRAM_ID,
      provider,
      methods: {
        createProject: (...args: any[]) => ({
          accounts: (accounts: any) => ({
            rpc: async () => {
              console.log(
                "Simulating createProject transaction",
                args,
                accounts,
              );
              return "tx_signature_123";
            },
          }),
        }),
      },
      account: {
        globalState: {
          fetch: async (pda: any) => ({
            totalProjects: new anchor.BN(0),
          }),
        },
      },
    } as any;
  }, [connection, wallet]);

  return { program };
}
