import React from 'react';
import { motion } from 'framer-motion';

type CardVariant = 'liquid-glass' | 'material' | 'cream' | 'flat';

interface CardProps {
  children: React.ReactNode;
  variant?: CardVariant;
  hoverLift?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'material',
  hoverLift = false,
  className = '',
  onClick
}) => {
  const variantStyles: Record<CardVariant, string> = {
    'liquid-glass': 'liquid-glass rounded-2xl sm:rounded-3xl',
    'material': 'bg-white rounded-2xl sm:rounded-3xl border border-emerald-950/10 shadow-[0_2px_8px_-2px_rgba(6,78,59,0.06),0_1px_2px_0_rgba(0,0,0,0.04)]',
    'cream': 'bg-[#fcfaf5] rounded-2xl sm:rounded-3xl border border-emerald-900/15',
    'flat': 'bg-white/80 rounded-2xl border border-neutral-200/80'
  };

  const clickableStyles = onClick ? 'cursor-pointer' : '';

  if (hoverLift) {
    return (
      <motion.div
        whileHover={{ y: -4, transition: { duration: 0.2, ease: 'easeOut' } }}
        className={`${variantStyles[variant]} ${clickableStyles} ${className}`}
        onClick={onClick}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div
      className={`${variantStyles[variant]} ${clickableStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
