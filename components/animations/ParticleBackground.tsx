'use client';

import { motion } from 'framer-motion';

export default function ParticleBackground() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    duration: Math.random() * 8 + 10,
    delay: Math.random() * 2,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            bottom: '-10px',
            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.6), rgba(212, 175, 55, 0))',
          }}
          animate={{
            y: [-20, -window.innerHeight - 50],
            opacity: [0, 1, 1, 0],
            x: [0, Math.sin(particle.x) * 50],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
