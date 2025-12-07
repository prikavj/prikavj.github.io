import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: 'tilt' | 'glow';
}

export default function Card({ children, className = '', hoverEffect = 'glow' }: CardProps) {
  if (hoverEffect === 'tilt') {
    return (
      <motion.div
        className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 ${className}`}
        whileHover={{ 
          rotateY: 5,
          rotateX: 5,
          scale: 1.05,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transition-all duration-300 ${className}`}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 0 30px rgba(255, 0, 255, 0.5), 0 0 60px rgba(0, 255, 255, 0.3)',
      }}
    >
      {children}
    </motion.div>
  );
}

