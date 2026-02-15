'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function BlogPostPage() {
  const { slug } = useParams();

  return (
    <div className="py-24">
       <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog">
            <Button variant="ghost" className="mb-8">
              &larr; Back to Blog
            </Button>
          </Link>
          
          <motion.article 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="prose dark:prose-invert lg:prose-xl mx-auto"
          >
            <h1>Blog Post: {slug}</h1>
            <p className="lead">
              This is a placeholder for blog post content. In a real application, 
              this would check the slug "{slug}" and fetch the markdown content 
              from a CMS or file system.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            {/* More placeholder content */}
          </motion.article>
       </div>
    </div>
  );
}
