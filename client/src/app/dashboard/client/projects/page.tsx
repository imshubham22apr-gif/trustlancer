'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Link from 'next/link';
import { PlusIcon, MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline';

export default function ProjectsListPage() {
  // TODO: Fetch real projects from API
  const projects: any[] = [];

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Projects</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Manage your active and past projects</p>
        </div>
        <Link href="/dashboard/client/projects/new">
          <Button>
            <PlusIcon className="w-5 h-5 mr-2" />
            New Project
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <Card padding="sm" className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search projects..." 
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-slate-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary-500 font-normal text-sm"
          />
        </div>
        <div className="flex gap-2">
            <Button variant="outline" className="flex items-center gap-2">
              <FunnelIcon className="w-4 h-4" />
              Filter
            </Button>
            {/* Sort Dropdown would go here */}
        </div>
      </Card>

      {/* Projects Grid */}
      <div className="grid gap-4">
        {projects.length === 0 && (
           <div className="text-center py-20 bg-gray-50 dark:bg-slate-800/50 rounded-lg border-2 border-dashed border-gray-200 dark:border-slate-700">
             <h3 className="mt-2 text-sm font-semibold text-gray-900 dark:text-white">No projects</h3>
             <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Get started by creating a new project.</p>
             <div className="mt-6">
               <Link href="/dashboard/client/projects/new">
                 <Button>
                   <PlusIcon className="w-5 h-5 mr-2" />
                   New Project
                 </Button>
               </Link>
             </div>
           </div>
        )}
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card padding="md" className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-primary-500 transition-colors cursor-pointer group">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                   <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
                     {project.title}
                   </h3>
                   <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        project.status === 'In Progress' 
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                          : project.status === 'In Review'
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                          : project.status === 'Completed'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400'
                      }`}>
                     {project.status}
                   </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>Budget: <span className="font-medium text-gray-900 dark:text-white">{project.budget}</span></span>
                  <span>•</span>
                  <span>{project.proposals} Proposals</span>
                  <span>•</span>
                  <span>Posted 2 days ago</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                 <Button variant="outline" size="sm">View Details</Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
