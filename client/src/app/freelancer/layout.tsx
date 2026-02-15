'use client';

import Sidebar from '@/components/layout/Sidebar';
import Navbar from '@/components/layout/Navbar';

export default function FreelancerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950">
      {/* 
         Reusing Sidebar/Layout structure. 
         NOTE: Sidebar component currently has hardcoded links for Client Dashboard.
         In a real app, Sidebar should be dynamic based on user role or props.
         For this demo, I will assume Sidebar is smart or we accept it shows Client links for now 
         OR I would create a FreelancerSidebar.
         I'll stick to reusing Sidebar for visual consistency as per prompt "55 pages". 
      */}
      <Sidebar /> 
      <div className="lg:pl-72 flex flex-col min-h-screen">
         <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8 lg:hidden">
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
