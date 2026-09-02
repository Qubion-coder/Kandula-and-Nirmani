'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

export default function Location() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-24 px-6 bg-gradient-to-b from-background via-champagne to-background overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl font-serif font-light mb-4"
            style={{ color: 'var(--primary)' }}
          >
            Wedding Venue
          </h2>
          <div
            className="w-16 h-1 mx-auto"
            style={{ backgroundColor: 'var(--primary)' }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Location info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Venue card */}
            <div
              className="rounded-lg p-8 bg-white overflow-hidden"
              style={{
                boxShadow:
                  '0 20px 50px rgba(212, 175, 55, 0.15), 0 0 30px rgba(212, 175, 55, 0.08)',
              }}
            >
              {/* Gold border */}
              <div
                className="absolute inset-0 rounded-lg border-2 pointer-events-none"
                style={{ borderColor: 'var(--primary)' }}
              />

              <div className="relative z-10 space-y-4">
                <h3
                  className="text-2xl font-serif font-light"
                  style={{ color: 'var(--primary)' }}
                >
                  Golden Rose Hotel
                </h3>
                <p className="text-foreground font-light leading-relaxed">
                  123 Colombo Road, Colombo 3, Sri Lanka
                </p>
                <p className="text-muted font-light">
                  Phone: +94 11 2396100
                </p>
              </div>
            </div>

            {/* Ceremony details */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="space-y-2">
                <p
                  className="text-sm uppercase tracking-widest font-light"
                  style={{ color: 'var(--primary)' }}
                >
                  Ceremony
                </p>
                <p className="text-lg font-light text-foreground">
                  10:30 AM - Grand Ballroom
                </p>
              </div>

              <div className="space-y-2">
                <p
                  className="text-sm uppercase tracking-widest font-light"
                  style={{ color: 'var(--primary)' }}
                >
                  Reception
                </p>
                <p className="text-lg font-light text-foreground">
                  12:00 PM - Diamond Hall
                </p>
              </div>

              <div className="space-y-2">
                <p
                  className="text-sm uppercase tracking-widest font-light"
                  style={{ color: 'var(--primary)' }}
                >
                  Dress Code
                </p>
                <p className="text-lg font-light text-foreground">
                  Elegant Formal Attire
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8 }}
            className="relative h-96 md:h-full rounded-lg overflow-hidden"
            style={{
              boxShadow:
                '0 20px 50px rgba(212, 175, 55, 0.15), 0 0 30px rgba(212, 175, 55, 0.08)',
            }}
          >
            {/* Map background */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, var(--champagne) 0%, var(--ivory) 100%)`,
              }}
            />

            {/* Map placeholder with location marker */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <motion.div
                  className="text-6xl mb-4"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  📍
                </motion.div>
                <p className="text-lg font-serif text-foreground mb-4">
                  Golden Rose Hotel
                </p>
                <p className="text-sm font-light text-muted">
                  Colombo, Sri Lanka
                </p>
              </div>
            </div>

            {/* Gold border */}
            <div
              className="absolute inset-0 border-2 rounded-lg pointer-events-none"
              style={{ borderColor: 'var(--primary)' }}
            />

            {/* Overlay for depth */}
            <motion.div
              className="absolute inset-0 opacity-0 pointer-events-none"
              style={{
                background: `radial-gradient(circle at center, var(--primary), transparent)`,
              }}
              animate={{ opacity: [0, 0.1, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-lg font-light text-foreground max-w-2xl mx-auto">
            Set in the heart of Colombo, the Golden Rose Hotel offers an
            enchanting ambiance perfect for celebrating love. We look forward to
            welcoming you to our special day.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
