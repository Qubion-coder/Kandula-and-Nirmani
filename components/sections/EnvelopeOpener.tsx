'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface EnvelopeOpenerProps {
  onOpen: () => void;
}

export default function EnvelopeOpener({ onOpen }: EnvelopeOpenerProps) {
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    if (isOpening) {
      // Play subtle music
      const audio = new Audio('/wedding-music.mp3');
      audio.volume = 0.3;
      audio.play().catch(() => {
        // Audio might not be available or user hasn't interacted with page
      });

      // Transition after animation completes
      const timer = setTimeout(() => {
        onOpen();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isOpening, onOpen]);

  const handleClick = () => {
    setIsOpening(true);
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-background overflow-hidden gap-0">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-ivory via-champagne to-white opacity-50" />

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-30"
            animate={{
              y: [0, -500],
              x: [0, Math.random() * 100 - 50],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              delay: Math.random() * 2,
              repeat: Infinity,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 50}%`,
            }}
          />
        ))}
      </div>

      {/* Main envelope + button wrapper */}
      <div className="relative z-10 flex flex-col items-center gap-10">
        {/* Envelope */}
        <motion.div
          className="relative"
          animate={isOpening ? { rotateX: 180, y: 50 } : { rotateX: 0, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          style={{ transformStyle: 'preserve-3d' }}
          onClick={handleClick}
        >
          <motion.div
            className="relative w-80 sm:w-96 h-56 sm:h-64 bg-white rounded-lg shadow-2xl cursor-pointer"
            style={{
              boxShadow: '0 20px 60px rgba(212, 175, 55, 0.3), 0 0 40px rgba(212, 175, 55, 0.15)',
            }}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {/* Gold border */}
            <div className="absolute inset-0 rounded-lg border-2" style={{ borderColor: 'var(--primary)' }} />

            {/* Envelope flap */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-32 rounded-t-lg origin-bottom"
              style={{
                borderBottomWidth: '2px',
                borderBottomColor: 'var(--primary)',
                background: `linear-gradient(135deg, var(--champagne) 0%, var(--ivory) 100%)`,
              }}
              animate={isOpening ? { rotateX: -180 } : { rotateX: 0 }}
              transition={{ duration: 1.5, delay: 0.2, ease: 'easeInOut' }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-base sm:text-lg font-serif tracking-widest text-center px-4" style={{ color: 'var(--primary)' }}>
                  Shashini & Madhawa
                </p>
              </div>
            </motion.div>

            {/* Envelope body */}
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-white flex flex-col items-center justify-center">
                <div className="text-center space-y-2 mt-16">
                  <p className="text-sm tracking-[0.3em] uppercase font-light" style={{ color: 'var(--primary)' }}>
                    You are invited to
                  </p>
                  <p className="text-2xl font-serif" style={{ color: 'var(--primary)' }}>Celebrate Love</p>
                </div>
              </div>
            </div>

            {/* Gold sparkle */}
            {!isOpening && (
              <motion.div
                className="absolute -top-2 -right-2 w-4 h-4 rounded-full opacity-60"
                style={{ background: 'radial-gradient(circle, var(--primary), transparent)' }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
          </motion.div>

          {/* Card sliding out */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-80 h-96 bg-white rounded-lg shadow-2xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            animate={isOpening ? { y: -300, opacity: 1, scale: 1 } : { y: 0, opacity: 0, scale: 0.8 }}
            transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
            style={{ boxShadow: '0 30px 80px rgba(212, 175, 55, 0.2), 0 0 60px rgba(212, 175, 55, 0.1)' }}
          >
            <div className="w-full h-full rounded-lg border-2" style={{ borderColor: 'var(--primary)' }} />
          </motion.div>
        </motion.div>

        {/* ── Open Button — always clearly visible below the envelope ── */}
        {!isOpening && (
          <motion.div
            className="flex flex-col items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {/* Bouncing arrow */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
              className="text-xl"
              style={{ color: 'var(--primary)' }}
            >
              ↓
            </motion.div>

            {/* Gold CTA button */}
            <motion.button
              onClick={handleClick}
              whileHover={{ scale: 1.07, boxShadow: '0 0 36px rgba(212,175,55,0.55)' }}
              whileTap={{ scale: 0.96 }}
              className="px-10 py-3 rounded-full font-serif text-base sm:text-lg tracking-widest uppercase text-white"
              style={{
                background: 'linear-gradient(135deg, #D4AF37 0%, #c9a227 100%)',
                boxShadow: '0 8px 30px rgba(212,175,55,0.4)',
              }}
            >
              ✉&nbsp; Open Invitation
            </motion.button>

            <p className="text-xs tracking-widest uppercase" style={{ color: 'var(--primary)', opacity: 0.65 }}>
              Tap the envelope or the button
            </p>
          </motion.div>
        )}

        {/* Opening feedback */}
        {isOpening && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-base font-serif tracking-widest"
            style={{ color: 'var(--primary)' }}
          >
            Opening your invitation…
          </motion.p>
        )}
      </div>
    </div>
  );
}
