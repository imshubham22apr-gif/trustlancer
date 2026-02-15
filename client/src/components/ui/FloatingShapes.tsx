'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/lib/theme-provider';

// A subtle background component with floating shapes
export default function FloatingShapes() {
  const { theme } = useTheme();
  
  // Don't render complex animations on mobile or if system perf is low? 
  // For now keep it simple and subtle.
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Gradient Orbs */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary-500/10 blur-[100px]"
      />
      
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-accent-500/10 blur-[120px]"
      />
      
      <motion.div
         animate={{
          x: [0, 40, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
        className="absolute top-[40%] left-[60%] w-[300px] h-[300px] rounded-full bg-blue-500/5 blur-[80px]"
      />
    </div>
  );
}
