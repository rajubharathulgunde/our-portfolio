
import { motion } from 'framer-motion';

export const Card = ({ 
  children, 
  className = '', 
  hoverLift = false,
  bgColor = 'bg-surface' 
}) => {
  const baseStyles = `${bgColor} rounded-apple-card shadow-material-subtle border border-neutral-whisper p-6 overflow-hidden`;
  
  if (hoverLift) {
    return (
      <motion.div 
        whileHover={{ y: -5, boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
        transition={{ duration: 0.2 }}
        className={`${baseStyles} ${className}`}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={`${baseStyles} ${className}`}>
      {children}
    </div>
  );
};