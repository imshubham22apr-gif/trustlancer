'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import WalletButton from '@/components/wallet/WalletButton';
import Card from '@/components/ui/Card';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import { useRouter } from 'next/navigation';
import { apiGet } from '@/lib/api';
import toast from 'react-hot-toast';

export default function SignInPage() {
  const { connected, publicKey } = useWallet();
  const { setVisible } = useWalletModal();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignIn = async () => {
    if (!connected || !publicKey) {
      setVisible(true);
      return;
    }

    setLoading(true);
    try {
      // Check if user exists
      const user = await apiGet(`/api/users/${publicKey.toString()}`);
      
      // If user exists, redirect to dashboard based on role
      if (user && user.role) {
        toast.success(`Welcome back, ${user.username || 'User'}!`);
        if (user.role === 'client') {
          router.push('/dashboard/client');
        } else {
          router.push('/freelancer');
        }
      } else {
         router.push('/auth/signup');
      }
    } catch (error: any) {
      console.log("Check user error:", error);
      // If error (not found), redirect to signup
      router.push('/auth/signup');
      toast("Please create an account first");
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
            Welcome back
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-sm text-gray-600 dark:text-gray-400"
          >
            Connect your wallet to access your dashboard
          </motion.p>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
        >
          <Card padding="lg" className="space-y-6">
            <div className="space-y-4">
              {/* If not connected, show WalletButton (Connect). If connected, show Sign In */}
              {!connected ? (
                 <WalletButton className="!w-full !justify-center !h-12 !text-base" />
              ) : (
                 <Button 
                    fullWidth 
                    size="lg" 
                    className="justify-center" 
                    onClick={handleSignIn}
                    loading={loading}
                 >
                    Sign In to Dashboard
                 </Button>
              )}
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200 dark:border-slate-700" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-slate-800 text-gray-500">Secure Solana Authentication</span>
                </div>
              </div>
            </div>

            <p className="text-center text-xs text-gray-500">
              By connecting your wallet, you agree to our{' '}
              <Link href="/terms" className="underline hover:text-primary-600">Terms of Service</Link>
              {' '}and{' '}
              <Link href="/privacy" className="underline hover:text-primary-600">Privacy Policy</Link>.
            </p>
          </Card>
        </motion.div>
        
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          New to TrustLancer?{' '}
          <Link href="/auth/signup" className="font-medium text-primary-600 hover:text-primary-500">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
