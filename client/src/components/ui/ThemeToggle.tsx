'use client';

import { useTheme } from '@/lib/theme-provider';
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { value: 'dark', icon: MoonIcon, label: 'Dark' },
    { value: 'light', icon: SunIcon, label: 'Light' },
    { value: 'system', icon: ComputerDesktopIcon, label: 'System' },
  ];

  return (
    <div className="flex items-center gap-1 p-1 rounded-lg border dark:border-slate-700 light:border-gray-200 dark:bg-slate-800 light:bg-white">
      {themes.map(({ value, icon: Icon, label }) => (
        <motion.button
          key={value}
          onClick={() => setTheme(value as any)}
          whileTap={{ scale: 0.95 }}
          className={cn(
            'relative px-2 py-1.5 rounded-md transition-all',
            theme === value 
              ? 'bg-primary-600 text-white' 
              : 'dark:text-slate-400 light:text-gray-600 hover:bg-gray-100 dark:hover:bg-slate-700'
          )}
          title={label}
        >
          <Icon className="w-4 h-4" />
        </motion.button>
      ))}
    </div>
  );
}
