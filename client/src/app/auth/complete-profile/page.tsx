'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Card from '@/components/ui/Card';
import { CameraIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function CompleteProfilePage() {
  const [role, setRole] = useState('freelancer'); // Default, would come from query or state

  return (
    <div className="min-h-screen py-20 px-4 flex items-center justify-center bg-gray-50 dark:bg-slate-950">
      <div className="w-full max-w-2xl space-y-8">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Complete your profile
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-sm text-gray-600 dark:text-gray-400"
          >
            Tell us a bit about yourself to get started
          </motion.p>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
        >
          <Card padding="lg">
            <form className="space-y-8">
              {/* Avatar Upload */}
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-slate-600 mb-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors">
                  <CameraIcon className="w-8 h-8 text-gray-400" />
                </div>
                <span className="text-sm font-medium text-primary-600 cursor-pointer hover:underline">
                  Upload photo
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                 <Input label="Display Name" placeholder="John Doe" fullWidth />
                 <Input label="Username" placeholder="@johndoe" fullWidth />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Bio
                </label>
                <textarea 
                  rows={4}
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Tell us about your skills and experience..."
                />
              </div>

              {role === 'freelancer' && (
                <div>
                   <Input label="Hourly Rate (USDC)" type="number" placeholder="50" />
                </div>
              )}

              <div className="pt-4 border-t border-gray-100 dark:border-slate-800 flex justify-end">
                <Button size="lg">Save & Continue</Button>
              </div>
            </form>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
