'use client';

import { useState, use } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { 
  ClockIcon, 
  CurrencyDollarIcon, 
  TagIcon, 
  CheckCircleIcon,
  BriefcaseIcon,
  CalendarIcon,
  UserCircleIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { toast } from 'react-hot-toast';

// Shared Mock Data (Matching Browse Page)
const MOCK_PROJECTS = [
  {
    id: 1,
    title: 'DeFi Dashboard Frontend',
    description: 'Looking for an experienced React/Solana developer to build a responsive dashboard for our DeFi protocol. Must have experience with web3.js/anchor. You will be responsible for integrating wallet connection, displaying token balances, and implementing swap UI components.',
    budget: '1,500 USDC',
    posted: '2 hours ago',
    deadline: '2 Weeks',
    skills: ['React', 'TypeScript', 'Solana', 'Tailwind', 'Web3.js'],
    category: 'Frontend',
    proposals: 5,
    client: {
      name: 'Alpha Protocol',
      rating: 4.8,
      jobsPosted: 12,
      totalSpent: '45k USDC'
    }
  },
  {
    id: 2,
    title: 'Rust Smart Contract Audit',
    description: 'Need a security expert to review our Anchor programs before mainnet launch. Focus on re-entrancy, access control, and PDA derivation validation. Report required.',
    budget: '3,000 USDC',
    posted: '5 hours ago',
    deadline: '1 Week',
    skills: ['Rust', 'Anchor', 'Security', 'Auditing'],
    category: 'Smart Contract',
    proposals: 2,
    client: {
      name: 'SafeDeFi',
      rating: 5.0,
      jobsPosted: 3,
      totalSpent: '12k USDC'
    }
  },
  {
    id: 3,
    title: 'NFT Gen Art Script',
    description: 'Python script needed to generate metadata and images for a 10k collection. Layers provided. Must handle rarity weights and conflict rules.',
    budget: '500 USDC',
    posted: '1 day ago',
    deadline: '3 Days',
    skills: ['Python', 'NFT', 'Metaplex', 'Image Processing'],
    category: 'Scripting',
    proposals: 12,
    client: {
      name: 'MoonCreators',
      rating: 4.5,
      jobsPosted: 8,
      totalSpent: '5k USDC'
    }
  },
  {
    id: 4,
    title: 'Mobile Wallet App Integration',
    description: 'Integrate Solana Pay request links into an existing React Native mobile wallet. Ensure smooth deep linking and transaction signing flow.',
    budget: '2,000 USDC',
    posted: '2 days ago',
    deadline: '3 Weeks',
    skills: ['React Native', 'Mobile', 'Solana Pay', 'Android', 'iOS'],
    category: 'Mobile',
    proposals: 8,
    client: {
      name: 'WalletX',
      rating: 4.9,
      jobsPosted: 25,
      totalSpent: '120k USDC'
    }
  }
];

export default function ProjectDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  // Unwrap params using React.use()
  const { id } = use(params);
  const projectId = parseInt(id);
  const project = MOCK_PROJECTS.find(p => p.id === projectId);
  
  const [isApplying, setIsApplying] = useState(false);
  const [hasApplied, setHasApplied] = useState(false);
  const [coverLetter, setCoverLetter] = useState('');

  const handleApply = async () => {
    setIsApplying(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsApplying(false);
    setHasApplied(true);
    toast.success('Proposal submitted successfully!');
  };

  if (!project) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h2>
        <Link href="/freelancer/browse-projects">
          <Button variant="outline">Back to Projects</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/freelancer/browse-projects" className="inline-flex items-center text-sm text-gray-500 hover:text-primary-600 mb-8 transition-colors">
        <ArrowLeftIcon className="w-4 h-4 mr-1" />
        Back to projects
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card padding="none" className="overflow-hidden border-t-4 border-t-primary-500">
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h1>
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <span className="flex items-center">
                        <BriefcaseIcon className="w-4 h-4 mr-1.5" />
                        {project.category}
                      </span>
                      <span className="flex items-center">
                        <ClockIcon className="w-4 h-4 mr-1.5" />
                        Posted {project.posted}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="prose dark:prose-invert max-w-none mb-8">
                  <h3 className="text-lg font-semibold mb-2">Description</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Skills Required</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map(skill => (
                      <span key={skill} className="px-3 py-1 rounded-full text-sm bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Application Form */}
          {!hasApplied ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-8">
                <h3 className="text-xl font-bold mb-4">Submit Proposal</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Cover Letter
                    </label>
                    <textarea 
                      className="w-full rounded-lg border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-primary-500 focus:border-primary-500 min-h-[150px] p-4"
                      placeholder="Explain why you are the best fit for this project..."
                      value={coverLetter}
                      onChange={(e) => setCoverLetter(e.target.value)}
                    />
                  </div>
                  <div className="flex justify-end">
                    <Button 
                      onClick={handleApply} 
                      loading={isApplying}
                      disabled={!coverLetter.trim()}
                      className="px-8"
                    >
                      Submit Proposal
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-8 text-center"
            >
              <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-2">Application Sent!</h3>
              <p className="text-green-700 dark:text-green-300">
                The client has been notified. Good luck!
              </p>
            </motion.div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card padding="lg">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">Project Overview</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Budget</span>
                  <span className="font-bold text-lg text-gray-900 dark:text-white flex items-center">
                    {project.budget}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Deadline</span>
                  <span className="font-medium text-gray-900 dark:text-white">{project.deadline}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Proposals</span>
                  <span className="font-medium text-gray-900 dark:text-white">{project.proposals}</span>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
             <Card padding="lg">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">About the Client</h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold text-lg">
                  {project.client.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{project.client.name}</h4>
                  <div className="flex items-center text-sm text-yellow-500">
                    {'★'.repeat(Math.round(project.client.rating))}
                    <span className="text-gray-400 ml-1">({project.client.rating})</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-gray-500">Jobs Posted</div>
                  <div className="font-semibold text-gray-900 dark:text-white">{project.client.jobsPosted}</div>
                </div>
                <div>
                  <div className="text-gray-500">Total Spent</div>
                  <div className="font-semibold text-gray-900 dark:text-white">{project.client.totalSpent}</div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
