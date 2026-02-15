'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            No hidden fees. No subscription costs. Just pay as you earn.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Traditional Platforms */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full border-red-200 dark:border-red-900/30 relative overflow-hidden" padding="lg">
              <div className="absolute top-0 right-0 px-4 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-bold rounded-bl-lg">
                TRADITIONAL
              </div>
              <h3 className="text-2xl font-bold mb-2">Web2 Platforms</h3>
              <div className="text-4xl font-bold text-gray-400 mb-6">20% <span className="text-base font-normal">fee</span></div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                  <XMarkIcon className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span>High platform fees</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                  <XMarkIcon className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span>Weeks to get paid</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                  <XMarkIcon className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span>Arbitrary account bans</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                  <XMarkIcon className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span>Expensive currency conversion</span>
                </li>
              </ul>
            </Card>
          </motion.div>

          {/* TrustLancer */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="h-full border-primary-500 ring-2 ring-primary-500/20 relative overflow-hidden" padding="lg">
              <div className="absolute top-0 right-0 px-4 py-1 bg-primary-600 text-white text-xs font-bold rounded-bl-lg">
                TrustLancer
              </div>
              <h3 className="text-2xl font-bold mb-2 text-primary-600 dark:text-primary-400">TrustLancer</h3>
              <div className="text-4xl font-bold mb-6">0.5% <span className="text-base font-normal text-gray-500 dark:text-gray-400">fee</span></div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  <span>Rock bottom fees</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  <span>Instant crypto payments</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  <span>You own your data & reputation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  <span>Smart contract security</span>
                </li>
              </ul>

              <Link href="/auth/signup" className="block">
                <Button fullWidth size="lg">Start Saving Today</Button>
              </Link>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
