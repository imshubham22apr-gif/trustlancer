'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { 
  CurrencyDollarIcon, 
  BriefcaseIcon, 
  StarIcon, 
  LockClosedIcon
} from '@heroicons/react/24/outline';

import { useWallet } from '@solana/wallet-adapter-react';

export default function FreelancerDashboard() {
  const { publicKey } = useWallet();
  
  const stats = [
    { label: 'Total Earnings', value: '$12,450', change: '+12%', icon: CurrencyDollarIcon },
    { label: 'Locked in Escrow', value: '$3,200', change: '2 Jobs', icon: LockClosedIcon },
    { label: 'Active Jobs', value: '3', change: '+1', icon: BriefcaseIcon },
    { label: 'Success Score', value: '98%', change: 'Top Rated', icon: StarIcon },
  ];

  const activeJobs = [
    {
      id: 1,
      title: "DeFi Landing Page",
      client: "Solana DeFi Protocol",
      budget: "$2,500",
      deadline: "2 days left",
      progress: 75,
      milestone: "Frontend Integration"
    },
    {
      id: 2,
      title: "Rust Smart Contract Review",
      client: "NFT Marketplace",
      budget: "$500",
      deadline: "5 days left",
      progress: 30,
      milestone: "Initial Audit"
    }
  ];

  const recommendedJobs = [
    {
      id: 101,
      title: "Build NFT Staking UI",
      budget: "$1,800 - $2,500",
      type: "Fixed Price",
      posted: "2 hours ago",
      skills: ["React", "Solana"]
    },
    {
      id: 102,
      title: "Integrate Pyth Oracle",
      budget: "$800",
      type: "Micro-task",
      posted: "4 hours ago",
      skills: ["Rust", "Oracle"]
    },
    {
      id: 103,
      title: "Design Tokenomics Dashboard",
      budget: "$3,000",
      type: "Design",
      posted: "1 day ago",
      skills: ["Figma", "UI/UX"]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Freelancer Dashboard</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Welcome back, {publicKey ? `${publicKey.toString().slice(0, 4)}...${publicKey.toString().slice(-4)}` : 'Freelancer'}
          </p>
        </div>
        <Link href="/freelancer/settings">
          <Button variant="outline">Edit Profile</Button>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card padding="sm">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400">
                  <stat.icon className="w-5 h-5" />
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  stat.change.includes('+') 
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' 
                    : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                }`}>
                  {stat.change}
                </span>
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {stat.label}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
          {/* Active Jobs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="h-full">
              <div className="flex items-center justify-between mb-6">
                 <h3 className="text-lg font-bold text-gray-900 dark:text-white">Active Jobs</h3>
                 <Link href="/freelancer/projects" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                   View all
                 </Link>
              </div>
              
              <div className="space-y-4">
                {activeJobs.length === 0 && (
                   <div className="text-center py-10 text-gray-500 text-sm">No active jobs</div>
                )}
                {activeJobs.map((job) => (
                  <div key={job.id} className="p-4 border rounded-lg border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-slate-900/50">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">{job.title}</h4>
                            <p className="text-xs text-gray-500">{job.client}</p>
                        </div>
                        <span className="text-sm font-bold text-gray-900 dark:text-white">{job.budget}</span>
                    </div>
                    
                    <div className="mt-3 mb-2">
                       <div className="flex justify-between text-xs mb-1 text-gray-500">
                          <span>{job.milestone}</span>
                          <span>{job.progress}%</span>
                       </div>
                       <div className="w-full h-1.5 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div className="h-full bg-primary-600 rounded-full" style={{ width: `${job.progress}%` }} />
                       </div>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                        <span className={`text-xs font-medium px-2 py-1 rounded ${
                           job.deadline.includes('days') ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-400' : 'bg-red-100 text-red-700'
                        }`}>
                          {job.deadline}
                        </span>
                        <Link href={`/freelancer/workspace/${job.id}`}>
                           <Button size="sm" variant="outline">View & Submit</Button>
                        </Link>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Recommended Jobs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="h-full">
              <div className="flex items-center justify-between mb-6">
                 <h3 className="text-lg font-bold text-gray-900 dark:text-white">Recommended for you</h3>
                 <Link href="/freelancer/browse-projects" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                   Browse all
                 </Link>
              </div>
              
              <div className="space-y-4">
                {recommendedJobs.length === 0 && (
                   <div className="text-center py-10 text-gray-500 text-sm">No recommended jobs found</div>
                )}
                {recommendedJobs.map((job) => (
                  <div key={job.id} className="p-4 border rounded-lg border-gray-100 dark:border-slate-800 hover:border-primary-500 transition-colors cursor-pointer group">
                    <div className="flex justify-between items-start mb-1">
                        <h4 className="font-semibold text-sm text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">{job.title}</h4>
                        <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{job.budget}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs text-gray-500 mt-2">
                        <span className="px-2 py-0.5 bg-gray-100 dark:bg-slate-800 rounded">{job.type}</span>
                        {job.skills.map(skill => (
                           <span key={skill} className="px-2 py-0.5 bg-gray-100 dark:bg-slate-800 rounded">{skill}</span>
                        ))}
                        <span className="ml-auto text-gray-400">{job.posted}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
      </div>
    </div>
  );
}
