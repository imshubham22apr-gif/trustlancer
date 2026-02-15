'use client';

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useEffect, useState } from 'react';

interface WalletButtonProps {
  className?: string;
}

// Wrapper to handle hydration issues
export default function WalletButton({ className = "" }: WalletButtonProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-40 h-12 bg-gray-200 dark:bg-slate-800 rounded-lg animate-pulse ${className}`} />
    );
  }

  return (
    <WalletMultiButton 
      className={`!bg-primary-600 hover:!bg-primary-700 !rounded-lg !font-medium !h-10 ${className}`} 
    />
  );
}
