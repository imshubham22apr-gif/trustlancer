'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import { 
  ShieldCheckIcon, 
  BoltIcon, 
  CurrencyDollarIcon, 
  GlobeAltIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon 
} from '@heroicons/react/24/outline';

export default function FeaturesPage() {
  const features = [
    {
      title: 'Smart Contracts Escrow',
      desc: 'Funds are secured on-chain until milestones are approved. No middleman needed.',
      icon: ShieldCheckIcon
    },
    {
      title: 'Instant Global Payments',
      desc: 'Get paid in USDC within seconds, anywhere in the world, with near-zero fees.',
      icon: BoltIcon
    },
    {
      title: '0.5% Protocol Fee',
      desc: 'We charge minimal fees compared to 10-20% on traditional platforms.',
      icon: CurrencyDollarIcon
    },
    {
      title: 'Decentralized Identity',
      desc: 'Build your reputation on-chain. Your history and reviews belong to you.',
      icon: GlobeAltIcon
    },
    {
      title: 'Encrypted Messaging',
      desc: 'Communicate securely with end-to-end encryption for all project details.',
      icon: ChatBubbleLeftRightIcon
    },
    {
      title: 'Milestone-based Work',
      desc: 'Break large projects into trackable milestones with separate payouts.',
      icon: DocumentTextIcon
    }
  ];

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Built for the <span className="text-gradient">Future of Work</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Everything you need to manage your freelance business, powered by Solana
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              <Card hover padding="lg" className="h-full">
                <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
