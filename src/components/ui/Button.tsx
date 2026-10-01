import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

type ButtonVariant = 'primary' | 'outline' | 'accent' | 'glass' | 'subtle';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  as?: 'button' | 'a';
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  className = '',
  href,
  onClick,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-body font-semibold transition-all duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2";
  
  const sizeStyles: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-xs rounded-lg gap-1.5",
    md: "px-6 py-3 text-sm rounded-xl gap-2",
    lg: "px-8 py-3.5 text-base rounded-xl gap-2.5"
  };

  const variants: Record<ButtonVariant, string> = {
    primary: "bg-emerald-900 text-[#fcfaf5] shadow-sm hover:bg-emerald-800 hover:shadow-md hover:shadow-emerald-950/15 border border-emerald-950/20 active:translate-y-0.5",
    outline: "bg-transparent text-emerald-900 border-1.5 border-emerald-900/70 hover:bg-emerald-900 hover:text-[#fcfaf5] active:translate-y-0.5",
    accent: "bg-accent-yellow text-emerald-950 shadow-sm hover:bg-yellow-300 border border-yellow-500/20 active:translate-y-0.5",
    glass: "liquid-glass text-emerald-900 hover:bg-white/80 active:translate-y-0.5",
    subtle: "bg-emerald-50 text-emerald-900 hover:bg-emerald-100 border border-emerald-200/50"
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span className="whitespace-nowrap">{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0 transition-transform group-hover:translate-x-0.5">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`${baseStyles} ${sizeStyles[size]} ${variants[variant]} ${className} group`}
        onClick={onClick as any}
      >
        {content}
      </a>
    );
  }

  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${sizeStyles[size]} ${variants[variant]} ${className} group`}
      onClick={onClick}
      {...props}
    >
      {content}
    </motion.button>
  );
};
