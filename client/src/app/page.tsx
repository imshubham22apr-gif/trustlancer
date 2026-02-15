'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { ArrowRightIcon, SparklesIcon, ShieldCheckIcon, BoltIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function LandingPage() {
  const features = [
    {
      icon: ShieldCheckIcon,
      title: 'Trustless Escrow',
      desc: 'Smart contracts hold funds securely until work is approved. No middlemen.'
    },
    {
      icon: BoltIcon,
      title: 'Instant Payments',
      desc: 'Funds released in ~400ms on Solana blockchain directly to your wallet.'
    },
    {
      icon: CurrencyDollarIcon,
      title: '0.5% Fee',
      desc: 'Keep more of your earnings. 40x cheaper than Upwork or Fiverr.'
    },
  ];

  const stats = [
    { value: '$2.5M+', label: 'Total Value Locked' },
    { value: '1,200+', label: 'Projects Completed' },
    { value: '850+', label: 'Active Freelancers' },
    { value: '98%', label: 'Success Rate' },
  ];

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary-50/50 to-transparent dark:from-primary-900/10 dark:to-transparent -z-10" />

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 sm:pt-40 sm:pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-primary-200 dark:border-primary-800/50 shadow-sm text-primary-700 dark:text-primary-300 text-sm font-medium mb-8"
          >
            <SparklesIcon className="w-4 h-4 mr-2 text-primary-500" />
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent font-bold">
              Built on Solana
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-8 leading-tight"
          >
            Freelancing, but
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500">
              Decentralized
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Trustless escrow, instant global payments, and minimal fees.
            <br className="hidden sm:block" />
            The future of independent work is here.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/auth/signup" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto shadow-lg shadow-primary-500/20 whitespace-nowrap px-8 py-4 text-lg"
                icon={<ArrowRightIcon className="w-5 h-5" />}
                iconPosition="right"
              >
                Get Started Free
              </Button>
            </Link>
            <Link href="/how-it-works" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto whitespace-nowrap px-8 py-4 text-lg bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
                How It Works
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-800/50 rounded-2xl border border-gray-100 dark:border-slate-700 p-8 sm:p-12 shadow-xl shadow-gray-200/50 dark:shadow-none backdrop-blur-sm"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose TrustLancer?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We eliminated the inefficiencies of web2 platforms to give you more value.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover padding="lg" className="h-full border-gray-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 text-primary-600 dark:text-primary-400 mb-6 font-bold">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
