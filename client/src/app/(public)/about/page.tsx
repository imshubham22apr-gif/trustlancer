'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import { 
  BuildingOfficeIcon, 
  UserGroupIcon, 
  GlobeAmericasIcon 
} from '@heroicons/react/24/outline';

export default function AboutPage() {
  const stats = [
    { label: 'Founded', value: '2023', icon: BuildingOfficeIcon },
    { label: 'Community', value: '50k+', icon: UserGroupIcon },
    { label: 'Countries', value: '120+', icon: GlobeAmericasIcon },
  ];

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission */}
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Empowering the <span className="text-gradient">Sovereign Workforce</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            TrustLancer is building the financial infrastructure for the future of work. We believe in a world where talent allows you to work from anywhere, for anyone, without friction.
          </motion.p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              <Card className="text-center h-full" padding="lg">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center mb-6">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="prose dark:prose-invert max-w-3xl mx-auto text-center"
        >
            <h2>Our Core Values</h2>
            <p>
                We are driven by the principles of decentralization, transparency, and fairness. 
                We remove the rent-seeking middlemen to return value to the people doing the work.
            </p>
        </motion.div>

      </div>
    </div>
  );
}
