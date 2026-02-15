'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { PlusIcon } from '@heroicons/react/24/outline';

export default function PortfolioPage() {
  const items = [
    { id: 1, title: 'DeFi Dashboard', image: '/portfolio/1.jpg', desc: 'A minimal dashboard for tracking yields.' },
    { id: 2, title: 'NFT Minting Site', image: '/portfolio/2.jpg', desc: 'High-performance candy machine UI.' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Portfolio</h1>
          <p className="text-sm text-gray-500">Showcase your best work</p>
        </div>
        <Button>
            <PlusIcon className="w-5 h-5 mr-2" />
            Add Project
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                  <Card padding="none" className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="h-48 bg-gray-200 dark:bg-slate-800 flex items-center justify-center text-gray-400">
                          {/* Placeholder for image */}
                          <span className="text-sm">Image Placeholder</span>
                      </div>
                      <div className="p-4">
                          <h3 className="font-bold mb-1">{item.title}</h3>
                          <p className="text-sm text-gray-500">{item.desc}</p>
                      </div>
                  </Card>
              </motion.div>
          ))}
      </div>
    </div>
  );
}
