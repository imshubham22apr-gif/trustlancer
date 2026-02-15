'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { StarIcon, MapPinIcon, MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/solid';
import Input from '@/components/ui/Input';

// Mock Data
const MOCK_FREELANCERS = [
  {
    id: 1,
    name: "Alex Rivera",
    title: "Senior Rust Developer",
    rating: 4.9,
    reviews: 42,
    rate: "$85/hr",
    skills: ["Rust", "Solana", "Anchor", "TypeScript"],
    location: "Global",
    avatar: "bg-blue-500",
    verified: true
  },
  {
    id: 2,
    name: "Sarah Chen",
    title: "Full Stack Web3 Engineer",
    rating: 5.0,
    reviews: 28,
    rate: "$95/hr",
    skills: ["React", "Node.js", "PostgreSQL", "Solana"],
    location: "USA",
    avatar: "bg-purple-500",
    verified: true
  },
  {
    id: 3,
    name: "Marcus Johnson",
    title: "Smart Contract Auditor",
    rating: 4.8,
    reviews: 15,
    rate: "$120/hr",
    skills: ["Security", "Rust", "Auditing"],
    location: "UK",
    avatar: "bg-green-500",
    verified: false
  },
  {
    id: 4,
    name: "Priya Patel",
    title: "Frontend Architect",
    rating: 4.9,
    reviews: 64,
    rate: "$75/hr",
    skills: ["Next.js", "Tailwind", "Framer Motion"],
    location: "India",
    avatar: "bg-pink-500",
    verified: true
  }
];

export default function FreelancersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = ["All", "Development", "Design", "Marketing", "Auditing"];

  // Filter logic
  const filteredFreelancers = MOCK_FREELANCERS.filter(f => 
    (filterCategory === 'All' || f.title.includes(filterCategory)) && // Simple mock category match
    (f.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
     f.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
           <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Find Talent</h1>
           <p className="text-gray-500 dark:text-gray-400 mt-1">Hire the top 1% of Solana developers.</p>
        </div>
        <Button>Post a Job</Button>
      </div>

      {/* Search & Filters */}
      <Card padding="md" className="sticky top-20 z-10 shadow-sm border-gray-200 dark:border-slate-800">
        <div className="flex flex-col md:flex-row gap-4 items-center">
           <div className="relative flex-1 w-full">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="text"
                placeholder="Search by name or skill (e.g. 'Rust')..." 
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent focus:ring-2 ring-primary-500 outline-none dark:text-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
           </div>
           
           <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    filterCategory === cat 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
           </div>
        </div>
      </Card>

      {/* Results Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFreelancers.length === 0 && (
           <div className="md:col-span-3 text-center py-20 bg-gray-50 dark:bg-slate-800/50 rounded-lg border-2 border-dashed border-gray-200 dark:border-slate-700">
             <h3 className="mt-2 text-sm font-semibold text-gray-900 dark:text-white">No freelancers found</h3>
             <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Try adjusting your search criteria.</p>
           </div>
        )}
        
        {filteredFreelancers.map((freelancer, index) => (
            <motion.div
                key={freelancer.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
            >
                <Card padding="lg" hover className="flex flex-col h-full group">
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${freelancer.avatar}`}>
                               {freelancer.name.charAt(0)}
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors">
                                  {freelancer.name}
                                  {freelancer.verified && (
                                    <span className="ml-1 text-blue-500 inline-block" title="Verified">✓</span>
                                  )}
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{freelancer.title}</p>
                            </div>
                        </div>
                        <div className="flex items-center text-yellow-500 text-sm font-bold bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 rounded">
                            <StarIcon className="w-4 h-4 mr-1" />
                            {freelancer.rating}
                            <span className="text-gray-400 font-normal ml-1">({freelancer.reviews})</span>
                        </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                        {freelancer.skills.map(skill => (
                            <span key={skill} className="px-2.5 py-1 bg-gray-100 dark:bg-slate-800 text-xs font-medium rounded-md text-gray-700 dark:text-gray-300 border dark:border-slate-700">
                                {skill}
                            </span>
                        ))}
                    </div>
                    
                    <div className="mt-auto pt-4 border-t border-gray-100 dark:border-slate-700 flex items-center justify-between">
                        <div className="flex flex-col">
                           <span className="text-xs text-gray-500">Hourly Rate</span>
                           <span className="font-bold text-lg text-gray-900 dark:text-white">{freelancer.rate}</span>
                        </div>
                        <Button size="sm" variant="outline">View Profile</Button>
                    </div>
                </Card>
            </motion.div>
        ))}
      </div>
    </div>
  );
}
