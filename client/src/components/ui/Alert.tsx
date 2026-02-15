'use client';

import { 
  CheckCircleIcon, 
  ExclamationTriangleIcon, 
  InformationCircleIcon, 
  XCircleIcon 
} from '@heroicons/react/24/outline';
import { cn } from '@/lib/utils';

interface AlertProps {
  type?: 'success' | 'warning' | 'error' | 'info';
  title: string;
  children?: React.ReactNode;
  className?: string;
}

export default function Alert({ type = 'info', title, children, className }: AlertProps) {
  const styles = {
    success: 'bg-green-50 text-green-800 border-green-200 dark:bg-green-900/10 dark:text-green-300 dark:border-green-900/30',
    warning: 'bg-yellow-50 text-yellow-800 border-yellow-200 dark:bg-yellow-900/10 dark:text-yellow-300 dark:border-yellow-900/30',
    error: 'bg-red-50 text-red-800 border-red-200 dark:bg-red-900/10 dark:text-red-300 dark:border-red-900/30',
    info: 'bg-blue-50 text-blue-800 border-blue-200 dark:bg-blue-900/10 dark:text-blue-300 dark:border-blue-900/30',
  };

  const icons = {
    success: CheckCircleIcon,
    warning: ExclamationTriangleIcon,
    error: XCircleIcon,
    info: InformationCircleIcon,
  };

  const Icon = icons[type];

  return (
    <div className={cn('rounded-lg p-4 border flex gap-3', styles[type], className)}>
       <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
       <div>
          <h3 className="font-medium">{title}</h3>
          {children && <div className="mt-1 text-sm opacity-90">{children}</div>}
       </div>
    </div>
  );
}
