'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Navbar from '@/components/layout/Navbar';

export default function GovernancePage() {
  const proposals = [
    { id: 1, title: 'Reduce Protocol Fee to 0.4%', status: 'Active', votesFor: '1.2M', votesAgainst: '50k', ends: '2 days' },
    { id: 2, title: 'Add Support for SPL Tokens', status: 'Passed', votesFor: '5M', votesAgainst: '10k', ends: 'Ended' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950">
        <Navbar />
        <div className="max-w-4xl mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Governance</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">Vote on the future of TrustLancer</p>

            <div className="grid gap-6">
                {proposals.map((prop, index) => (
                    <motion.div
                        key={prop.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card padding="lg" className="hover:border-primary-500 transition-colors cursor-pointer">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold">{prop.title}</h3>
                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                    prop.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                                }`}>
                                    {prop.status}
                                </span>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>For</span>
                                        <span>{prop.votesFor}</span>
                                    </div>
                                    <div className="h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                        <div className="h-full bg-green-500 w-[95%]"></div>
                                    </div>
                                </div>
                                
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>Against</span>
                                        <span>{prop.votesAgainst}</span>
                                    </div>
                                    <div className="h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                        <div className="h-full bg-red-500 w-[5%]"></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-6 flex justify-end">
                                <Button size="sm" variant="outline">View Proposal</Button>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    </div>
  );
}
