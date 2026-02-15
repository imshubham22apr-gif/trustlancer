'use client';

import Sidebar from '@/components/layout/Sidebar';
import Navbar from '@/components/layout/Navbar';
import { ThemeProvider } from '@/lib/theme-provider';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950">
      {/* 
         We are manually handling layout here. 
         Ideally, this component is used in app/dashboard/layout.tsx 
      */}
      <Sidebar />
      <div className="lg:pl-72 flex flex-col min-h-screen">
         {/* Overriding global navbar for dashboard specific one if needed, or reusing */}
         <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8 lg:hidden">
             {/* Mobile Sidebar Trigger would go here */}
             <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                 {/* Search etc */}
             </div>
         </header>
         
         <main className="py-10 px-4 sm:px-6 lg:px-8">
           {children}
         </main>
      </div>
    </div>
  );
}
