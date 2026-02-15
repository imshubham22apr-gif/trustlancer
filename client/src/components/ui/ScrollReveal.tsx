'use client';

import { motion, useInView, UseInViewOptions } from 'framer-motion';
import { useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  duration?: number;
  viewport?: UseInViewOptions;
  className?: string;
  classNameView?: string; // class for the motion div
}

export default function ScrollReveal({
  children,
  width = 'fit-content',
  delay = 0,
  direction = 'up',
  distance = 30,
  duration = 0.5,
  viewport = { once: true, margin: "-50px" },
  className,
  classNameView,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, viewport);

  const getHiddenVariant = () => {
    switch (direction) {
      case 'up': return { opacity: 0, y: distance };
      case 'down': return { opacity: 0, y: -distance };
      case 'left': return { opacity: 0, x: distance };
      case 'right': return { opacity: 0, x: -distance };
      default: return { opacity: 0, y: distance };
    }
  };

  const getVisibleVariant = () => {
    switch (direction) {
      case 'up': return { opacity: 1, y: 0 };
      case 'down': return { opacity: 1, y: 0 };
      case 'left': return { opacity: 1, x: 0 };
      case 'right': return { opacity: 1, x: 0 };
      default: return { opacity: 1, y: 0 };
    }
  };

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }} className={className}>
      <motion.div
        variants={{
          hidden: getHiddenVariant(),
          visible: getVisibleVariant(),
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration, delay, ease: "easeOut" }}
        className={classNameView}
      >
        {children}
      </motion.div>
    </div>
  );
}
