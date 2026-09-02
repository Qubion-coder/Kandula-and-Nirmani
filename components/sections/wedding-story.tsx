'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { viewportSettings } from '@/lib/animations';

export function WeddingStory() {
  return (
    <section className="relative py-20 px-4 md:py-32 bg-white">
      {/* Decorative Background */}
      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 right-10 w-32 h-32 rounded-full bg-gold/5 blur-2xl"
      />

      <div className="max-w-3xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={viewportSettings}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-serif font-light text-gold mb-4">Our Story</h2>
          <div className="w-16 h-1 bg-gold/30 mx-auto" />
        </motion.div>

        {/* Story Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={viewportSettings}
          className="space-y-8"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Story Text 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={viewportSettings}
              className="space-y-4"
            >
              <p className="text-dark-text text-lg leading-relaxed font-light">
                Our journey began under the stars of a moonlit evening in Colombo. From that first moment, we knew our lives would be forever intertwined. Through laughter, shared dreams, and gentle moments of understanding, our love has blossomed into something extraordinary.
              </p>
            </motion.div>

            {/* Story Text 2 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={viewportSettings}
              className="space-y-4"
            >
              <p className="text-dark-text text-lg leading-relaxed font-light">
                Every chapter of our story is written with gratitude—for the families who supported us, for the friends who celebrated with us, and for the love that continues to grow stronger with each passing day. Now, we invite you to witness the beginning of our forever.
              </p>
            </motion.div>
          </div>

          {/* Centered Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={viewportSettings}
            className="text-center py-12 px-8 border-l-4 border-gold/30 bg-champagne/50 rounded-r-lg"
          >
            <p className="text-2xl font-serif font-light text-gold italic">
              "Two souls, one heart, and a lifetime of love"
            </p>
          </motion.div>

          {/* Decorative Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={viewportSettings}
            className="flex justify-center gap-6 pt-8"
          >
            {['💍', '🌹', '🪷', '✨'].map((icon, idx) => (
              <motion.span
                key={idx}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  delay: idx * 0.15,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="text-4xl"
              >
                {icon}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
