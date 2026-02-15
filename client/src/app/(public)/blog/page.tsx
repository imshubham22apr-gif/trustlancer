'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Link from 'next/link';
import { CalendarIcon } from '@heroicons/react/24/outline';

export default function BlogPage() {
  const posts = [
    {
      slug: 'intro-to-web3-freelancing',
      title: 'The Rise of Web3 Freelancing',
      excerpt: 'How blockchain technology is revolutionizing the gig economy by removing intermediaries and ensuring instant payments.',
      date: 'Oct 24, 2023',
      category: 'Industry',
      readTime: '5 min read'
    },
    {
      slug: 'using-smart-contracts',
      title: 'Understanding Trustless Escrow',
      excerpt: 'A deep dive into how our smart contracts protect both clients and freelancers without the need for a third party arbiter.',
      date: 'Nov 02, 2023',
      category: 'Technology',
      readTime: '8 min read'
    },
    {
      slug: 'solana-payments',
      title: 'Why We Chose Solana',
      excerpt: 'Low fees, high speed, and environmental efficiency make Solana the perfect blockchain for global payments.',
      date: 'Nov 15, 2023',
      category: 'Engineering',
      readTime: '4 min read'
    },
    {
      slug: 'getting-started',
      title: 'Guide: Getting Started as a Freelancer',
      excerpt: 'Tips and tricks for building a standout profile and winning your first jobs on TrustLancer.',
      date: 'Dec 05, 2023',
      category: 'Guides',
      readTime: '6 min read'
    }
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
            Insights & Updates
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Latest news from the team and the future of work.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <Card hover padding="lg" className="h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <span className="px-2 py-1 rounded bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300 font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500">
                        <CalendarIcon className="w-4 h-4 mr-1" />
                        {post.date}
                    </div>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-500">{post.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 flex-grow leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 text-primary-600 dark:text-primary-400 font-medium group-hover:underline">
                    Read article &rarr;
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
