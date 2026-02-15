'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import { MagnifyingGlassIcon, FunnelIcon, ClockIcon, CurrencyDollarIcon, TagIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

// Mock Data for Projects
const MOCK_PROJECTS = [
  {
    id: 1,
    title: 'DeFi Dashboard Frontend',
    description: 'Looking for an experienced React/Solana developer to build a responsive dashboard for our DeFi protocol. Must have experience with web3.js/anchor.',
    budget: '1,500 USDC',
    posted: '2 hours ago',
    skills: ['React', 'TypeScript', 'Solana', 'Tailwind'],
    category: 'Frontend',
    proposals: 5
  },
  {
    id: 2,
    title: 'Rust Smart Contract Audit',
    description: 'Need a security expert to review our Anchor programs before mainnet launch. Focus on re-entrancy and access control.',
    budget: '3,000 USDC',
    posted: '5 hours ago',
    skills: ['Rust', 'Anchor', 'Security'],
    category: 'Smart Contract',
    proposals: 2
  },
  {
    id: 3,
    title: 'NFT Gen Art Script',
    description: 'Python script needed to generate metadata and images for a 10k collection. Layers provided.',
    budget: '500 USDC',
    posted: '1 day ago',
    skills: ['Python', 'NFT', 'Metaplex'],
    category: 'Scripting',
    proposals: 12
  },
  {
    id: 4,
    title: 'Mobile Wallet App Integration',
    description: 'Integrate Solana Pay request links into an existing React Native mobile wallet.',
    budget: '2,000 USDC',
    posted: '2 days ago',
    skills: ['React Native', 'Mobile', 'Solana Pay'],
    category: 'Mobile',
    proposals: 8
  }
];

export default function BrowseProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Smart Contract', 'Mobile', 'Design', 'Scripting'];

  const filteredProjects = MOCK_PROJECTS.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Browse Projects
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Find your next opportunity and get paid in crypto.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Input 
            placeholder="Search projects by title or skill..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>
        
        {/* Category Tabs (Desktop) */}
        <div className="hidden md:flex gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === cat 
                  ? 'bg-primary-600 text-white shadow-md' 
                  : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid gap-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card hover padding="lg" className="border-l-4 border-l-transparent hover:border-l-primary-500 transition-all">
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                        {project.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-3xl">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.skills.map(skill => (
                        <span key={skill} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300">
                          <TagIcon className="w-3 h-3 mr-1" />
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <ClockIcon className="w-4 h-4 mr-1.5" />
                        Posted {project.posted}
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">{project.proposals}</span>
                        <span className="ml-1">Proposals</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-start md:items-end justify-between min-w-[200px]">
                    <div className="text-right mb-4">
                      <div className="text-sm text-gray-500 dark:text-gray-400">Fixed Budget</div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white flex items-center md:justify-end">
                         {project.budget}
                      </div>
                    </div>
                    
                    <Link href={`/freelancer/projects/${project.id}`} className="w-full md:w-auto">
                      <Button fullWidth variant="primary">
                        Apply Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))
        ) : (
          <div className="text-center py-20 bg-gray-50 dark:bg-slate-800/50 rounded-xl border border-dashed border-gray-300 dark:border-slate-700">
            <MagnifyingGlassIcon className="w-12 h-12 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No projects found</h3>
            <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
