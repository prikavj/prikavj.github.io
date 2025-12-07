import { motion } from 'framer-motion';

interface AnimatedBlobProps {
  className?: string;
  delay?: number;
  duration?: number;
}

export default function AnimatedBlob({ className = '', delay = 0, duration = 20 }: AnimatedBlobProps) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-30 ${className}`}
      animate={{
        x: [0, 100, 0],
        y: [0, -100, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

