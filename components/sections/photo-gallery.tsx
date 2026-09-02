'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { viewportSettings } from '@/lib/animations';

export function PhotoGallery() {
  // Placeholder gallery items - in real usage, these would be actual images
  const galleryItems = [
    { id: 1, title: 'First Meeting', category: 'Memories' },
    { id: 2, title: 'Engagement', category: 'Moments' },
    { id: 3, title: 'Adventures', category: 'Travel' },
    { id: 4, title: 'Celebrations', category: 'Joy' },
    { id: 5, title: 'Quiet Times', category: 'Love' },
    { id: 6, title: 'Together', category: 'Us' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="relative py-20 md:py-32 px-4 bg-white overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute -top-40 -left-40 w-80 h-80 rounded-full border border-gold/5"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={viewportSettings}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-serif font-light text-gold mb-4">Our Moments</h2>
          <div className="w-16 h-1 bg-gold/30 mx-auto" />
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={viewportSettings}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
            >
              {/* Image Placeholder with Gradient */}
              <div className="relative w-full h-full bg-gradient-to-br from-gold/10 via-champagne to-rose-accent/10 overflow-hidden">
                {/* Cinematic Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-dark-text/40 via-transparent to-transparent flex items-end justify-start p-6"
                >
                  <div className="space-y-2">
                    <h3 className="text-white text-xl font-serif font-light">{item.title}</h3>
                    <p className="text-white/80 text-sm font-light">{item.category}</p>
                  </div>
                </motion.div>

                {/* Floating Icon */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute top-6 right-6 text-3xl opacity-60 group-hover:opacity-100 transition-opacity"
                >
                  ✨
                </motion.div>

                {/* Shimmer Effect on Hover */}
                <motion.div
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                />
              </div>

              {/* Border Glow on Hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 rounded-lg border-2 border-gold/50"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={viewportSettings}
          className="text-center mt-16"
        >
          <p className="text-dark-text text-lg font-light italic mb-6">
            Each moment tells our story. Explore our journey together.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 border-2 border-gold text-gold font-light rounded-lg hover:bg-gold hover:text-white transition-colors duration-300"
          >
            View Full Gallery
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
