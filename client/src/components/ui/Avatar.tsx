'use client';

import { ImgHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fallback?: string;
}

const Avatar = forwardRef<HTMLImageElement, AvatarProps>(
  ({ className, size = 'md', src, alt, fallback, ...props }, ref) => {
    const sizes = {
      sm: 'w-8 h-8 text-xs',
      md: 'w-10 h-10 text-sm',
      lg: 'w-12 h-12 text-base',
      xl: 'w-16 h-16 text-lg',
    };

    return (
      <div className={cn('relative inline-block', className)}>
        {src ? (
          <img
            ref={ref}
            src={src}
            alt={alt || 'Avatar'}
            className={cn(
              'rounded-full object-cover bg-gray-100 dark:bg-slate-800 ring-2 ring-white dark:ring-slate-900',
              sizes[size].split(' ').slice(0, 2).join(' ')
            )}
            {...props}
          />
        ) : (
          <div
            className={cn(
              'flex items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-semibold ring-2 ring-white dark:ring-slate-900',
              sizes[size]
            )}
          >
            {fallback || (alt ? alt.charAt(0).toUpperCase() : '?')}
          </div>
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';
export default Avatar;
