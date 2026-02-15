'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useWallet } from '@solana/wallet-adapter-react';
import { cn } from '@/lib/utils';
import { 
  HomeIcon, 
  BriefcaseIcon, 
  UserGroupIcon, 
  BanknotesIcon, 
  ChatBubbleLeftRightIcon, 
  Cog6ToothIcon
} from '@heroicons/react/24/outline';

const clientNavigation = [
  { name: 'Overview', href: '/dashboard/client', icon: HomeIcon },
  { name: 'My Projects', href: '/dashboard/client/projects', icon: BriefcaseIcon },
  { name: 'Freelancers', href: '/dashboard/client/freelancers', icon: UserGroupIcon },
  { name: 'Payments', href: '/dashboard/client/payments', icon: BanknotesIcon },
  { name: 'Messages', href: '/dashboard/client/messages', icon: ChatBubbleLeftRightIcon },
  { name: 'Settings', href: '/dashboard/client/settings', icon: Cog6ToothIcon },
];

const freelancerNavigation = [
  { name: 'Overview', href: '/freelancer', icon: HomeIcon },
  { name: 'Active Jobs', href: '/freelancer/projects', icon: BriefcaseIcon },
  { name: 'Find Work', href: '/freelancer/jobs', icon: UserGroupIcon }, // Reusing Icon for now or find better
  { name: 'Earnings', href: '/freelancer/earnings', icon: BanknotesIcon }, // speculative path
  { name: 'Settings', href: '/freelancer/settings', icon: Cog6ToothIcon },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { publicKey } = useWallet();

  const isFreelancer = pathname.startsWith('/freelancer');
  const navigation = isFreelancer ? freelancerNavigation : clientNavigation;

  return (
    <div className="hidden lg:flex lg:flex-col lg:w-72 lg:fixed lg:inset-y-0 border-r border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 z-40 pb-4">
      <div className="flex items-center h-16 flex-shrink-0 px-6 border-b border-gray-200 dark:border-slate-800">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center text-white font-bold text-xl">
            S
          </div>
          <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white">
            TrustLancer
          </span>
        </Link>
      </div>
      
      <div className="flex-grow flex flex-col gap-y-1 overflow-y-auto px-4 py-6">
        <div className="text-xs font-semibold leading-6 text-gray-400 uppercase tracking-wider mb-2 px-2">
          {isFreelancer ? 'Freelancer Workspace' : 'Client Dashboard'}
        </div>
        <ul className="space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/freelancer' && item.href !== '/dashboard/client' && pathname.startsWith(`${item.href}`));
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    'group flex gap-x-3 rounded-lg p-2 text-sm leading-6 font-medium transition-colors',
                    isActive
                      ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                      : 'text-gray-700 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-slate-800'
                  )}
                >
                  <item.icon
                    className={cn(
                      'h-6 w-6 shrink-0',
                      isActive ? 'text-primary-600 dark:text-primary-400' : 'text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400'
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="px-6 mt-auto">
        <div className="flex items-center gap-x-4 py-3 px-4 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700">
           <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-700 dark:text-primary-300 font-bold text-xs">
             {publicKey ? publicKey.toString().slice(0, 2) : 'SH'}
           </div>
           <div className="flex-1 min-w-0">
             <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
               {publicKey ? `${publicKey.toString().slice(0, 4)}...${publicKey.toString().slice(-4)}` : 'Not Connected'}
             </p>
             <p className="text-xs text-gray-500 truncate">
                {publicKey ? (isFreelancer ? 'Freelancer Account' : 'Client Account') : 'Guest'}
             </p>
           </div>
        </div>
      </div>
    </div>
  );
}
