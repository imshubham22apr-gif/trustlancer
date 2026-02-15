'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Tab {
  id: string;
  label: string;
  count?: number;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (id: string) => void;
  className?: string;
}

export default function Tabs({ tabs, activeTab, onChange, className }: TabsProps) {
  return (
    <div className={cn("border-b border-gray-200 dark:border-slate-800", className)}>
      <div className="flex gap-6 overflow-x-auto no-scrollbar">
        {tabs.map((tab) => {
           const isActive = activeTab === tab.id;
           return (
             <button
                key={tab.id}
                onClick={() => onChange(tab.id)}
                className={cn(
                   "relative pb-4 text-sm font-medium transition-colors whitespace-nowrap",
                   isActive ? "text-primary-600 dark:text-primary-400" : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                )}
             >
                <div className="flex items-center gap-2">
                   {tab.label}
                   {tab.count !== undefined && (
                      <span className={cn(
                         "px-2 py-0.5 rounded-full text-xs",
                         isActive 
                           ? "bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400" 
                           : "bg-gray-100 text-gray-600 dark:bg-slate-800 dark:text-gray-400"
                      )}>
                         {tab.count}
                      </span>
                   )}
                </div>
                {isActive && (
                   <motion.div 
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400"
                   />
                )}
             </button>
           );
        })}
      </div>
    </div>
  );
}
