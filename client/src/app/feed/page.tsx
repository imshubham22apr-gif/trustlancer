'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Navbar from '@/components/layout/Navbar';
import { HandThumbUpIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline';

export default function FeedPage() {
  const posts = [
    { id: 1, author: 'TrustLancer Team', time: '2h ago', content: 'We just reached 1,000 active projects! Thank you to our community.', likes: 45, comments: 12 },
    { id: 2, author: 'Alex Developer', time: '5h ago', content: 'Looking for a UI designer for a new DeFi protocol launched on Solana. DM me!', likes: 20, comments: 5 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950">
        <Navbar />
        <div className="max-w-2xl mx-auto py-10 px-4">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Community Feed</h1>
                <Button>Create Post</Button>
            </div>

            <div className="space-y-6">
                {posts.map((post, index) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card padding="lg">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center font-bold text-primary-700 dark:text-primary-300">
                                    {post.author[0]}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">{post.author}</h3>
                                    <p className="text-xs text-gray-500">{post.time}</p>
                                </div>
                            </div>
                            
                            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                {post.content}
                            </p>

                            <div className="flex items-center gap-6 pt-4 border-t border-gray-100 dark:border-slate-800">
                                <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary-600 transition-colors">
                                    <HandThumbUpIcon className="w-5 h-5" />
                                    {post.likes} Likes
                                </button>
                                <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary-600 transition-colors">
                                    <ChatBubbleLeftIcon className="w-5 h-5" />
                                    {post.comments} Comments
                                </button>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    </div>
  );
}
