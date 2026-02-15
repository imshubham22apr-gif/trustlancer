'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { 
  CurrencyDollarIcon, 
  BriefcaseIcon, 
  ClockIcon, 
  CheckCircleIcon,
  PlusIcon
} from '@heroicons/react/24/outline';
import { useWallet } from '@solana/wallet-adapter-react';

export default function ClientDashboard() {
  const { publicKey } = useWallet();

  const stats = [
    { label: 'Total Spend', value: '$0', change: '0%', icon: CurrencyDollarIcon },
    { label: 'Active Projects', value: '0', change: '0', icon: BriefcaseIcon },
    { label: 'In Review', value: '0', change: '0', icon: ClockIcon },
    { label: 'Completed', value: '0', change: '0', icon: CheckCircleIcon },
  ];

  const recentProjects: any[] = [];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Welcome back, {publicKey ? `${publicKey.toString().slice(0, 4)}...${publicKey.toString().slice(-4)}` : 'Client'}
          </p>
        </div>
        <div className="flex items-center gap-3">
           <Link href="/dashboard/client/messages">
              <Button variant="outline" size="sm">
                <CurrencyDollarIcon className="w-4 h-4 mr-2" />
                Add Funds
              </Button>
           </Link>
           <Link href="/dashboard/client/projects/new">
            <Button>
              <PlusIcon className="w-5 h-5 mr-2" />
              Post Project
            </Button>
           </Link>
        </div>
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
            <Card padding="sm" className="relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400">
                  <stat.icon className="w-5 h-5" />
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  stat.change.startsWith('+') 
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Content - Active Projects */}
        <div className="lg:col-span-2 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="overflow-hidden min-h-[400px]">
              <div className="flex items-center justify-between mb-6">
                 <h3 className="text-lg font-bold text-gray-900 dark:text-white">Active Projects</h3>
                 <Link href="/dashboard/client/projects" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                   View all
                 </Link>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm whitespace-nowrap">
                  <thead className="uppercase tracking-wider border-b border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800/50 text-gray-500">
                    <tr>
                      <th scope="col" className="px-6 py-4 font-semibold">Project</th>
                      <th scope="col" className="px-6 py-4 font-semibold">Freelancer</th>
                      <th scope="col" className="px-6 py-4 font-semibold">Status</th>
                      <th scope="col" className="px-6 py-4 font-semibold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
                    {recentProjects.length === 0 && (
                      <tr>
                        <td colSpan={4} className="px-6 py-12 text-center text-sm text-gray-500">
                          No active projects found. Post a job to get started!
                        </td>
                      </tr>
                    )}
                    {recentProjects.map((project) => (
                      <tr key={project.id} className="hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors">
                        <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                          {project.title}
                        </td>
                        <td className="px-6 py-4 text-gray-500 dark:text-gray-400">
                          {project.freelancer}
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                            {project.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <Button size="sm" variant="ghost">Manage</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Sidebar - Approvals & Activity */}
        <div className="space-y-8">
           {/* Pending Approvals */}
           <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Pending Approvals</h3>
              <div className="space-y-4">
                 <div className="text-center py-8 text-gray-500 text-sm border-2 border-dashed border-gray-200 dark:border-slate-700 rounded-lg">
                   No pending approvals
                 </div>
                 {/* Example Item (Hidden/ready for data)
                 <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-slate-800/50">
                    <div className="w-2 h-2 mt-2 rounded-full bg-yellow-400 shrink-0" />
                    <div>
                      <p className="text-sm font-medium dark:text-white">Milestone #1: Designs</p>
                      <p className="text-xs text-gray-500">Submitted by Alex • 2h ago</p>
                      <div className="mt-2 flex gap-2">
                        <Button size="sm" className="h-7 text-xs">Review</Button>
                      </div>
                    </div>
                 </div> */}
              </div>
            </Card>
           </motion.div>

           {/* Activity Feed */}
           <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
               <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-2 before:w-0.5 before:bg-gray-200 dark:before:bg-slate-700">
                 {/* Mock Activity */}
                 <div className="relative pl-6">
                   <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-green-500 border-2 border-white dark:border-slate-900" />
                   <p className="text-sm text-gray-900 dark:text-white">Account created</p>
                   <p className="text-xs text-gray-500">Just now</p>
                 </div>
               </div>
            </Card>
           </motion.div>
        </div>
      </div>
    </div>
  );
}
