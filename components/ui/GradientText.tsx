'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
}

export default function GradientText({
  children,
  className = '',
  animate = false,
}: GradientTextProps) {
  const textElement = (
    <span
      className={`bg-gradient-to-r from-brand-cyan-neon to-brand-violet-medium bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {textElement}
      </motion.div>
    );
  }

  return textElement;
}
