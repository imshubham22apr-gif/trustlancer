'use client';

import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { cn } from '@/lib/utils';
import Button from './Button';

interface DropdownItem {
  label: string;
  onClick?: () => void;
  href?: string;
  icon?: React.ComponentType<{ className?: string }>;
  disabled?: boolean;
  danger?: boolean;
}

interface DropdownProps {
  label: React.ReactNode;
  items: DropdownItem[][]; // Array of arrays for grouped items
  align?: 'left' | 'right';
  className?: string;
}

export default function Dropdown({ label, items, align = 'right', className }: DropdownProps) {
  return (
    <Menu as="div" className={cn('relative inline-block text-left', className)}>
      <div>
        <Menu.Button as={Fragment}>
          {typeof label === 'string' ? (
             <Button variant="outline" size="sm" icon={<ChevronDownIcon className="w-4 h-4" />} iconPosition="right">
               {label}
             </Button>
          ) : (
            label
          )}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={cn(
            'absolute z-50 mt-2 w-56 origin-top-right divide-y divide-gray-100 dark:divide-slate-700 rounded-xl bg-white dark:bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
            align === 'right' ? 'right-0' : 'left-0'
          )}
        >
          {items.map((group, groupIndex) => (
            <div key={groupIndex} className="p-1">
              {group.map((item, itemIndex) => (
                <Menu.Item key={itemIndex} disabled={item.disabled}>
                  {({ active }) => (
                    <button
                      onClick={item.onClick}
                      className={cn(
                        'group flex w-full items-center rounded-lg px-2 py-2 text-sm transition-colors',
                        active 
                          ? 'bg-gray-100 dark:bg-slate-700' 
                          : 'text-gray-700 dark:text-gray-300',
                        item.danger && 'text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20',
                        item.disabled && 'opacity-50 cursor-not-allowed'
                      )}
                    >
                      {item.icon && (
                        <item.icon
                          className={cn(
                            'mr-2 h-4 w-4',
                            item.danger 
                              ? 'text-red-500' 
                              : 'text-gray-500 dark:text-gray-400'
                          )}
                          aria-hidden="true"
                        />
                      )}
                      {item.label}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
