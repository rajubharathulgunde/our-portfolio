import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'emerald' | 'mint' | 'yellow' | 'teal' | 'subtle' | 'outline' | 'glass';
  className?: string;
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'subtle',
  className = '',
  size = 'md'
}) => {
  const sizeStyles = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-xs sm:text-sm';

  const variantStyles: Record<string, string> = {
    emerald: 'bg-emerald-900 text-white font-medium',
    mint: 'bg-emerald-100 text-emerald-900 border border-emerald-300/40 font-medium',
    yellow: 'bg-accent-yellow text-emerald-950 font-bold',
    teal: 'bg-accent-teal text-emerald-950 font-medium',
    subtle: 'bg-emerald-50/80 text-emerald-900/90 border border-emerald-200/50 font-medium',
    outline: 'border border-emerald-900/30 text-emerald-900 font-medium bg-transparent',
    glass: 'bg-white/60 backdrop-blur-md text-emerald-900 border border-white/70 shadow-xs font-medium'
  };

  return (
    <span className={`inline-flex items-center rounded-lg leading-none ${sizeStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};
