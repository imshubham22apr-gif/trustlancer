'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Card from '@/components/ui/Card';
import { EnvelopeIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

export default function ContactPage() {
  return (
    <div className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            We're here to help you build the future of work.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <Card padding="lg">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <EnvelopeIcon className="w-5 h-5 text-primary-500" />
                Email Us
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                For general inquiries and support.
              </p>
              <a href="mailto:support@TrustLancer.com" className="text-primary-600 hover:text-primary-700 font-medium">
                support@TrustLancer.com
              </a>
            </Card>

            <Card padding="lg">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <ChatBubbleLeftRightIcon className="w-5 h-5 text-primary-500" />
                Community
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Join our Discord server for real-time support and community.
              </p>
              <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
                Join Discord &rarr;
              </a>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card padding="lg">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input label="Name" placeholder="Your name" fullWidth />
                  <Input label="Email" type="email" placeholder="you@example.com" fullWidth />
                </div>
                <div>
                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                     Message
                   </label>
                   <textarea 
                     rows={5}
                     className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                     placeholder="How can we help?"
                   />
                </div>
                <Button fullWidth size="lg">Send Message</Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
