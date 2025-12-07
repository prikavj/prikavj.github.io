import { useEffect, useRef } from 'react';

export default function CursorBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
  }>>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles - slightly larger and more visible
    const particleCount = 50;
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 2 + 2,
    }));

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle, i) => {
        // Move particle
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        // Calculate distance to mouse
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        
        // Color based on distance to cursor - brighter and more visible
        const opacity = Math.max(0.3, 1 - distance / 200);
        ctx.fillStyle = `rgba(56, 189, 248, ${opacity * 0.8})`;
        ctx.fill();
        
        // Add glow effect to particles
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(56, 189, 248, 0.8)';
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw connections to nearby particles
        particlesRef.current.slice(i + 1).forEach((otherParticle) => {
          const dx2 = otherParticle.x - particle.x;
          const dy2 = otherParticle.y - particle.y;
          const distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          if (distance2 < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            const opacity2 = (1 - distance2 / 150) * 0.5;
            ctx.strokeStyle = `rgba(56, 189, 248, ${opacity2})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });

        // Draw connection to cursor if close - more visible
        if (distance < 150) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
          const opacity3 = (1 - distance / 150) * 0.8;
          ctx.strokeStyle = `rgba(56, 189, 248, ${opacity3})`;
          ctx.lineWidth = 2;
          ctx.shadowBlur = 5;
          ctx.shadowColor = 'rgba(56, 189, 248, 0.6)';
          ctx.stroke();
          ctx.shadowBlur = 0;
        }

        // Attract to cursor
        if (distance < 200 && distance > 0) {
          const force = (200 - distance) / 20000;
          particle.vx += (dx / distance) * force;
          particle.vy += (dy / distance) * force;
        }

        // Damping
        particle.vx *= 0.98;
        particle.vy *= 0.98;
      });

      // Draw cursor glow - much more visible
      ctx.beginPath();
      const gradient = ctx.createRadialGradient(
        mouseRef.current.x,
        mouseRef.current.y,
        0,
        mouseRef.current.x,
        mouseRef.current.y,
        150
      );
      gradient.addColorStop(0, 'rgba(56, 189, 248, 0.4)');
      gradient.addColorStop(0.5, 'rgba(56, 189, 248, 0.2)');
      gradient.addColorStop(1, 'rgba(56, 189, 248, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw cursor center dot
      ctx.beginPath();
      ctx.arc(mouseRef.current.x, mouseRef.current.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(56, 189, 248, 1)';
      ctx.shadowBlur = 15;
      ctx.shadowColor = 'rgba(56, 189, 248, 1)';
      ctx.fill();
      ctx.shadowBlur = 0;

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: 'plus-lighter' }}
    />
  );
}

