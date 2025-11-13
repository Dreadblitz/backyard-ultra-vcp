'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export default function Card({
  children,
  className = '',
  hover = true,
  glass = true,
}: CardProps) {
  const glassStyles = glass ? 'glass' : 'bg-brand-navy-dark/60';
  const hoverStyles = hover
    ? 'hover:scale-105 hover:border-brand-cyan-neon'
    : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${glassStyles} rounded-lg p-6 transition-all duration-300 ${hoverStyles} ${className}`}
    >
      {children}
    </motion.div>
  );
}
