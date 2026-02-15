'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { name: 'Features', href: '/features' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Roadmap', href: '/roadmap' },
      { name: 'Showcase', href: '/showcase' },
    ],
    Company: [
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    Resources: [
      { name: 'Documentation', href: '/docs' },
      { name: 'Help Center', href: '/help' },
      { name: 'Community', href: '/community' },
      { name: 'Terms', href: '/terms' },
      { name: 'Privacy', href: '/privacy' },
    ],
  };

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center text-white font-bold text-xl">
                T
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white">
                TrustLancer
              </span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              The professional freelance marketplace built on Solana. Trustless, fast, and low fees.
            </p>
            <div className="flex space-x-3">
              {/* Mac-style Traffic Lights */}
              <div className="w-4 h-4 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer shadow-sm transition-transform hover:scale-110" />
              <div className="w-4 h-4 rounded-full bg-yellow-400 hover:bg-yellow-500 cursor-pointer shadow-sm transition-transform hover:scale-110" />
              <div className="w-4 h-4 rounded-full bg-green-500 hover:bg-green-600 cursor-pointer shadow-sm transition-transform hover:scale-110" />
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-slate-800">
          <p className="text-sm text-center text-gray-500 dark:text-gray-400">
            &copy; {currentYear} TrustLancer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
