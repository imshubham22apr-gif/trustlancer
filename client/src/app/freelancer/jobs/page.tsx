'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { MagnifyingGlassIcon, MapPinIcon, CurrencyDollarIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function FindJobsPage() {
  const jobs = [
    { id: 1, title: 'Senior Rust Developer', client: 'Solana Labs', budget: '$8,000', type: 'Fixed', posted: '2h ago', skills: ['Rust', 'Solana'], desc: 'Looking for an experienced Rust developer to help build our core protocol...' },
    { id: 2, title: 'Frontend Engineer (React)', client: 'DeFi DAO', budget: '$60-80/hr', type: 'Hourly', posted: '5h ago', skills: ['React', 'Web3.js'], desc: 'Join our team to build the next generation of DeFi interfaces...' },
    { id: 3, title: 'Smart Contract Auditor', client: 'SecureAudit', budget: '$12,000', type: 'Fixed', posted: '1d ago', skills: ['Security', 'Audit'], desc: 'Audit our staking contracts before mainnet launch...' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Find Work</h1>
      </div>

      {/* Search & Filters */}
      <Card padding="md">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-grow relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
               type="text" 
               placeholder="Search for jobs..." 
               className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-primary-500 focus:outline-none"
            />
          </div>
          <select className="px-4 py-2 rounded-lg border border-gray-200 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-primary-500 focus:outline-none">
             <option>All Categories</option>
             <option>Development</option>
             <option>Design</option>
             <option>Marketing</option>
          </select>
          <Button>Search</Button>
        </div>
      </Card>

      {/* Job List */}
      <div className="space-y-4">
        {jobs.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card padding="lg" hover className="cursor-pointer group">
               <div className="flex justify-between items-start mb-2">
                   <div>
                       <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
                           {job.title}
                       </h3>
                       <p className="text-sm text-gray-500">{job.client} • {job.posted}</p>
                   </div>
                   <div className="text-right">
                       <p className="font-bold text-lg">{job.budget}</p>
                       <p className="text-xs text-gray-500">{job.type}</p>
                   </div>
               </div>
               
               <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                   {job.desc}
               </p>
               
               <div className="flex gap-2">
                   {job.skills.map(skill => (
                       <span key={skill} className="px-2 py-1 bg-gray-100 dark:bg-slate-800 text-xs rounded-md text-gray-600 dark:text-gray-300">
                           {skill}
                       </span>
                   ))}
               </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
