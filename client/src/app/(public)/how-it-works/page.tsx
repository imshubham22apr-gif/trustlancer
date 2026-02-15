'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { 
  UserPlusIcon, 
  BriefcaseIcon, 
  CurrencyDollarIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function HowItWorksPage() {
  const steps = [
    {
      title: 'Create Profile',
      desc: 'Connect your wallet and build your professional profile. No approval needed.',
      icon: UserPlusIcon,
    },
    {
      title: 'Post or Find Work',
      desc: 'Clients post jobs with crypto usage. Freelancers bid with proposals.',
      icon: BriefcaseIcon,
    },
    {
      title: 'Secure Escrow',
      desc: 'Funds are locked in a smart contract. Work begins safely.',
      icon: CurrencyDollarIcon,
    },
    {
      title: 'Get Paid Instantly',
      desc: 'Once work is approved, funds are released in seconds to your wallet.',
      icon: CheckBadgeIcon,
    },
  ];

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            How TrustLancer Works
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            The simplest way to work and hire in the web3 economy.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              <Card className="h-full relative overflow-hidden" padding="lg">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <span className="text-6xl font-bold">{index + 1}</span>
                </div>
                <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center mb-6">
                  <step.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {step.desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Link href="/auth/signup">
            <Button size="lg">Start Your Journey</Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
