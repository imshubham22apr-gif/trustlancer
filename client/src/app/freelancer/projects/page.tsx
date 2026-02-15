'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { ClockIcon, CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

// Mock Data
const MOCK_PROJECTS = [
  { 
    id: 1, 
    title: 'NFT Marketplace Frontend', 
    client: 'Web3 Ventures', 
    status: 'Active', 
    deadline: '3 days left', 
    earnings: '4,000 USDC',
    progress: 75
  },
  { 
    id: 2, 
    title: 'Token Staking UI', 
    client: 'DeFi Pro', 
    status: 'Pending Approval', 
    deadline: 'Submitted', 
    earnings: '1,500 USDC',
    progress: 100
  },
  { 
    id: 3, 
    title: 'Solana Rust Audit', 
    client: 'SecureDAO', 
    status: 'Completed', 
    deadline: 'Jan 15, 2026', 
    earnings: '2,000 USDC',
    rating: 5
  },
  { 
    id: 4, 
    title: 'Landing Page Revamp', 
    client: 'StartupX', 
    status: 'Disputed', 
    deadline: 'On Hold', 
    earnings: '800 USDC',
    issue: 'Scope Creep'
  },
];

const TABS = ['Active', 'Pending Approval', 'Completed', 'Disputed'];

export default function FreelancerProjectsPage() {
  const [activeTab, setActiveTab] = useState('Active');

  const filteredProjects = MOCK_PROJECTS.filter(p => p.status === activeTab);

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
           <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Projects</h1>
           <p className="text-gray-500 text-sm mt-1">Manage your active work and view history.</p>
        </div>
        <Link href="/freelancer/browse-projects">
          <Button>Find More Work</Button>
        </Link>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors
                ${activeTab === tab
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                }
              `}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Project List */}
      <div className="space-y-4 min-h-[300px]">
        <AnimatePresence mode="wait">
          {filteredProjects.length === 0 ? (
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="text-center py-16 bg-gray-50 dark:bg-slate-800/50 rounded-lg border-2 border-dashed border-gray-200 dark:border-slate-700"
             >
                <p className="text-gray-500 dark:text-gray-400">No projects found in {activeTab}.</p>
                {activeTab === 'Active' && <Button className="mt-4">Find Work</Button>}
             </motion.div>
          ) : (
            filteredProjects.map((project, index) => (
               <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: index * 0.05 }}
               >
                   <Card padding="lg" className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                       <div className="flex-1">
                           <div className="flex items-center gap-3 mb-1">
                             <h3 className="font-bold text-lg text-gray-900 dark:text-white">{project.title}</h3>
                             {project.status === 'Disputed' && (
                               <span className="text-xs font-bold text-red-500 bg-red-100 dark:bg-red-900/30 px-2 py-0.5 rounded-full flex items-center">
                                 <ExclamationTriangleIcon className="w-3 h-3 mr-1" />
                                 Dispute Open
                               </span>
                             )}
                           </div>
                           <p className="text-sm text-gray-500 dark:text-gray-400">Client: {project.client}</p>
                           
                           {/* Progress Bar for Active */}
                           {project.status === 'Active' && (
                             <div className="mt-3 w-full max-w-xs">
                               <div className="flex justify-between text-xs mb-1 text-gray-500">
                                  <span>Progress</span>
                                  <span>{project.progress}%</span>
                               </div>
                               <div className="h-1.5 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                  <div className="h-full bg-primary-600 rounded-full" style={{ width: `${project.progress}%` }} />
                               </div>
                             </div>
                           )}
                       </div>

                       <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
                           <div className="text-right">
                               <p className="font-bold text-gray-900 dark:text-white">{project.earnings}</p>
                               <p className="text-xs text-gray-400">{project.status === 'Completed' ? 'Paid' : 'Locked'}</p>
                           </div>
                           
                           <div className="flex gap-2">
                             {project.status === 'Active' && (
                               <Link href={`/freelancer/workspace/${project.id}`}>
                                 <Button size="sm" variant="outline">Update Milestone</Button>
                               </Link>
                             )}
                             <Link href={`/freelancer/workspace/${project.id}`}>
                               <Button size="sm">View Workspace</Button>
                             </Link>
                           </div>
                       </div>
                   </Card>
               </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
