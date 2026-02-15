'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { CheckCircleIcon, ClockIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

export default function ProjectDetailsPage() {
  const { id } = useParams();

  // Mock data
  const project = {
    id,
    title: 'DeFi Dashboard UI Design',
    status: 'In Progress',
    budget: 2500,
    freelancer: 'Alex D.',
    milestones: [
        { id: 1, title: 'Wireframes', amount: 500, status: 'Completed', deadline: '2023-11-01' },
        { id: 2, title: 'High Fidelity Mockups', amount: 1000, status: 'In Review', deadline: '2023-11-10' },
        { id: 3, title: 'Prototype', amount: 1000, status: 'Pending', deadline: '2023-11-15' },
    ]
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
         <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h1>
            <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                    <CurrencyDollarIcon className="w-4 h-4" />
                    Budget: ${project.budget}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 text-xs font-medium">
                    {project.status}
                </span>
            </div>
         </div>
         <Button>Message Freelancer</Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
              <Card padding="md">
                  <h3 className="text-lg font-bold mb-4">Milestones</h3>
                  <div className="space-y-4">
                      {project.milestones.map((milestone) => (
                          <div key={milestone.id} className="flex items-center justify-between p-4 border rounded-lg border-gray-100 dark:border-slate-800">
                              <div className="flex items-center gap-4">
                                  <div className={`p-2 rounded-full ${
                                      milestone.status === 'Completed' ? 'bg-green-100 text-green-600' :
                                      milestone.status === 'In Review' ? 'bg-yellow-100 text-yellow-600' :
                                      'bg-gray-100 text-gray-400'
                                  }`}>
                                      {milestone.status === 'Completed' ? <CheckCircleIcon className="w-5 h-5" /> : <ClockIcon className="w-5 h-5" />}
                                  </div>
                                  <div>
                                      <p className="font-medium">{milestone.title}</p>
                                      <p className="text-sm text-gray-500">Due: {milestone.deadline}</p>
                                  </div>
                              </div>
                              <div className="text-right">
                                  <p className="font-bold">${milestone.amount}</p>
                                  {milestone.status === 'In Review' && (
                                      <Button size="sm" className="mt-2">Approve</Button>
                                  )}
                              </div>
                          </div>
                      ))}
                  </div>
              </Card>
          </div>

          <div className="space-y-6">
              <Card padding="md">
                  <h3 className="text-lg font-bold mb-4">Contract Details</h3>
                  <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                          <span className="text-gray-500">Contract ID</span>
                          <span className="font-mono">#8X29...92K</span>
                      </div>
                      <div className="flex justify-between">
                          <span className="text-gray-500">Start Date</span>
                          <span>Oct 25, 2023</span>
                      </div>
                      <div className="flex justify-between">
                          <span className="text-gray-500">Escrow Balance</span>
                          <span className="font-bold text-green-600">$2,000</span>
                      </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-100 dark:border-slate-800">
                      <Button fullWidth variant="outline" className="text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 border-red-200">
                          Raise Dispute
                      </Button>
                  </div>
              </Card>
          </div>
      </div>
    </div>
  );
}
