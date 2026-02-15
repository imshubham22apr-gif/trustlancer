'use client';

import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Navbar from '@/components/layout/Navbar';

export default function CreatePostPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950">
        <Navbar />
        <div className="max-w-2xl mx-auto py-10 px-4">
            <h1 className="text-2xl font-bold mb-8">Create Post</h1>
            <Card padding="lg">
                <textarea 
                    rows={6}
                    className="w-full text-lg bg-transparent border-none focus:ring-0 resize-none placeholder-gray-400"
                    placeholder="What's on your mind?"
                />
                <div className="flex justify-end pt-4 border-t border-gray-100 dark:border-slate-800">
                    <Button>Post</Button>
                </div>
            </Card>
        </div>
    </div>
  );
}
