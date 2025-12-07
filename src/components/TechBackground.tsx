import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface TechElement {
  id: number;
  x: number;
  y: number;
  type: 'robot' | 'ai' | 'server';
  size: number;
  rotation: number;
  opacity: number;
}

export default function TechBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<TechElement[]>([]);

  useEffect(() => {
    // Create tech elements
    const elementCount = 15;
    elementsRef.current = Array.from({ length: elementCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      type: ['robot', 'ai', 'server'][Math.floor(Math.random() * 3)] as 'robot' | 'ai' | 'server',
      size: Math.random() * 40 + 30,
      rotation: Math.random() * 360,
      opacity: Math.random() * 0.3 + 0.1,
    }));
  }, []);

  const getIcon = (type: string) => {
    switch (type) {
      case 'robot':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm-2 12v-1h4v1h-4zm0-2V9h4v3h-4z"/>
            <circle cx="9" cy="8" r="1"/>
            <circle cx="15" cy="8" r="1"/>
          </svg>
        );
      case 'ai':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 2.18l8 4v8.82c0 4.54-3.07 8.83-8 9.82-4.93-.99-8-5.28-8-9.82V8.18l8-4z"/>
            <circle cx="12" cy="12" r="2"/>
            <path d="M8 10l2 2 4-4"/>
          </svg>
        );
      case 'server':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <rect x="2" y="3" width="20" height="4" rx="1"/>
            <rect x="2" y="8" width="20" height="4" rx="1"/>
            <rect x="2" y="13" width="20" height="4" rx="1"/>
            <rect x="2" y="18" width="20" height="4" rx="1"/>
            <circle cx="5" cy="5" r="0.5"/>
            <circle cx="5" cy="10" r="0.5"/>
            <circle cx="5" cy="15" r="0.5"/>
            <circle cx="5" cy="20" r="0.5"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ mixBlendMode: 'screen' }}
    >
      {elementsRef.current.map((element) => (
        <motion.div
          key={element.id}
          className="absolute"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            opacity: element.opacity,
            color: 'rgba(56, 189, 248, 0.4)',
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.sin(element.id) * 10, 0],
            rotate: [element.rotation, element.rotation + 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10 + element.id * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: element.id * 0.5,
          }}
        >
          {getIcon(element.type)}
        </motion.div>
      ))}

      {/* Neural network connections */}
      <svg className="absolute inset-0 w-full h-full opacity-20" style={{ mixBlendMode: 'screen' }}>
        {elementsRef.current.slice(0, 8).map((element, i) => {
          const nextElement = elementsRef.current[i + 1];
          if (!nextElement) return null;
          return (
            <motion.g
              key={`line-${i}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            >
              <line
                x1={`${element.x}%`}
                y1={`${element.y}%`}
                x2={`${nextElement.x}%`}
                y2={`${nextElement.y}%`}
                stroke="rgba(56, 189, 248, 0.3)"
                strokeWidth="1"
              />
            </motion.g>
          );
        })}
      </svg>

      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{ 
        backgroundImage: `
          repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(56, 189, 248, 0.1) 2px, rgba(56, 189, 248, 0.1) 4px),
          repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(56, 189, 248, 0.1) 2px, rgba(56, 189, 248, 0.1) 4px)
        `,
        backgroundSize: '50px 50px',
      }} />
    </div>
  );
}

