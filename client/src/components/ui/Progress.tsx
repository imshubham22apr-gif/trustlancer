import { cn } from '@/lib/utils';

interface ProgressProps {
  value: number;
  max?: number;
  className?: string;
  variant?: 'primary' | 'accent' | 'success' | 'warning' | 'error';
}

export default function Progress({ value, max = 100, className, variant = 'primary' }: ProgressProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  
  const variants = {
    primary: 'bg-primary-600',
    accent: 'bg-accent-500',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    error: 'bg-red-500',
  };

  return (
    <div className={cn("w-full bg-gray-200 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden", className)}>
      <div 
        className={cn("h-full rounded-full transition-all duration-300", variants[variant])} 
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
