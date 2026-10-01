
import { motion } from 'framer-motion';

export const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick, 
  icon 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-body font-medium rounded-apple-button transition-all duration-200";
  const sizeStyles = "px-5 py-3 text-base";
  
  const variants = {
    primary: "bg-emerald-900 text-canvas shadow-material-subtle hover:bg-emerald-800 hover:shadow-material-hover",
    outline: "bg-transparent text-emerald-900 border border-emerald-900 hover:bg-emerald-900 hover:text-canvas",
    accent: "bg-accent-mint text-emerald-900 shadow-material-subtle hover:brightness-95",
  };

  return (
    <motion.button 
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${sizeStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </motion.button>
  );
};