'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Link from 'next/link';
import { ArrowLeftIcon, UserIcon, BriefcaseIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { cn } from '@/lib/utils';

import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import { useRouter } from 'next/navigation';
import { apiPost } from '@/lib/api';
import toast from 'react-hot-toast';
import Input from '@/components/ui/Input';

export default function SignUpPage() {
  const [role, setRole] = useState<'client' | 'freelancer' | null>(null);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { connected, publicKey } = useWallet();
  const { setVisible } = useWalletModal();
  const router = useRouter();

  const handleContinue = async () => {
    if (!role || !email) {
      toast.error('Please select a role and enter your email');
      return; 
    }

    if (!connected || !publicKey) {
      setVisible(true);
      return;
    }

    setLoading(true);
    try {
      await apiPost('/api/users', {
        walletAddress: publicKey.toString(),
        role: role,
        email: email,
      });

      toast.success('Account created successfully!');
      
      if (role === 'client') {
        router.push('/dashboard/client');
      } else {
        router.push('/freelancer');
      }
    } catch (error: any) {
      console.error('Signup error:', error);
      const msg = error.message || 'Failed to create account.';
      toast.error(msg);
      
      if (msg.includes('User already exists')) {
        setTimeout(() => router.push('/auth/signin'), 2000);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 flex items-center justify-center bg-gray-50 dark:bg-slate-950">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white mb-8">
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Create your account
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-sm text-gray-600 dark:text-gray-400"
          >
            Join the decentralized workforce today
          </motion.p>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
        >
          <Card padding="lg" className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setRole('freelancer')}
                className={cn(
                  "p-4 rounded-lg border text-left transition-all hover:border-primary-500",
                  role === 'freelancer' 
                    ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 ring-1 ring-primary-500" 
                    : "border-gray-200 dark:border-slate-700"
                )}
              >
                <div className="bg-primary-100 dark:bg-primary-900/40 w-8 h-8 rounded-lg flex items-center justify-center mb-3 text-primary-600 dark:text-primary-400">
                  <UserIcon className="w-5 h-5" />
                </div>
                <div className="font-medium">Freelancer</div>
                <div className="text-xs text-gray-500 mt-1">I want to find work</div>
              </button>

              <button
                onClick={() => setRole('client')}
                className={cn(
                  "p-4 rounded-lg border text-left transition-all hover:border-primary-500",
                  role === 'client' 
                    ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 ring-1 ring-primary-500" 
                    : "border-gray-200 dark:border-slate-700"
                )}
              >
                <div className="bg-primary-100 dark:bg-primary-900/40 w-8 h-8 rounded-lg flex items-center justify-center mb-3 text-primary-600 dark:text-primary-400">
                  <BriefcaseIcon className="w-5 h-5" />
                </div>
                <div className="font-medium">Client</div>
                <div className="text-xs text-gray-500 mt-1">I want to hire talent</div>
              </button>
            </div>

            <div className="mt-4">
              <Input 
                label="Email Address" 
                type="email" 
                placeholder="you@example.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                required
              />
            </div>

            <Button 
              fullWidth 
              size="lg" 
              className="justify-center mt-6" 
              disabled={!role || !email || loading}
              onClick={handleContinue}
              loading={loading}
            >
              {connected ? 'Create Account' : 'Connect Wallet & Create'}
            </Button>

            <p className="text-center text-xs text-gray-500">
              By connecting, you agree to our{' '}
              <Link href="/terms" className="underline hover:text-primary-600">Terms</Link>
              {' '}and{' '}
              <Link href="/privacy" className="underline hover:text-primary-600">Privacy Policy</Link>.
            </p>
          </Card>
        </motion.div>
        
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{' '}
          <Link href="/auth/signin" className="font-medium text-primary-600 hover:text-primary-500">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
