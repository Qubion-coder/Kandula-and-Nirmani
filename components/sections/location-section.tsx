'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { viewportSettings } from '@/lib/animations';

export function LocationSection() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Venue',
      details: ['Golden Rose Hotel', 'Colombo, Sri Lanka'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+94 (0)11 234 5678'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['hello@wedding.com'],
    },
  ];

  return (
    <section className="relative py-20 md:py-32 px-4 bg-white overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 right-20 w-40 h-40 rounded-full bg-gold/5 blur-2xl"
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
          <h2 className="text-5xl font-serif font-light text-gold mb-4">Find Us Here</h2>
          <div className="w-16 h-1 bg-gold/30 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={viewportSettings}
            className="relative rounded-lg overflow-hidden border-2 border-gold/20 aspect-square"
          >
            {/* Map Placeholder */}
            <div className="w-full h-full bg-gradient-to-br from-champagne via-gold/10 to-rose-accent/10 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gold/50 mx-auto mb-4" />
                <p className="text-dark-text font-light">
                  Golden Rose Hotel<br />
                  Colombo, Sri Lanka
                </p>
              </div>

              {/* Animated Border */}
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(212, 175, 55, 0.2)',
                    '0 0 40px rgba(212, 175, 55, 0.4)',
                    '0 0 20px rgba(212, 175, 55, 0.2)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 rounded-lg"
              />
            </div>
          </motion.div>

          {/* Contact Information */}
          <div className="flex flex-col justify-center space-y-8">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                  viewport={viewportSettings}
                  className="space-y-3"
                >
                  {/* Icon and Title */}
                  <div className="flex items-center gap-4">
                    <motion.div
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="p-3 bg-gold/10 rounded-lg"
                    >
                      <Icon className="w-6 h-6 text-gold" />
                    </motion.div>
                    <h3 className="text-2xl font-serif font-light text-dark-text">
                      {info.title}
                    </h3>
                  </div>

                  {/* Details */}
                  <div className="ml-16 space-y-1">
                    {info.details.map((detail, detailIdx) => (
                      <p key={detailIdx} className="text-dark-text font-light">
                        {detail}
                      </p>
                    ))}
                  </div>

                  {/* Accent Line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.3 + idx * 0.2,
                    }}
                    viewport={viewportSettings}
                    className="h-0.5 w-12 bg-gold/30 origin-left"
                  />
                </motion.div>
              );
            })}

            {/* Directions Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={viewportSettings}
              className="pt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-6 border-2 border-gold text-gold font-light rounded-lg hover:bg-gold hover:text-white transition-all duration-300"
              >
                Get Directions
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={viewportSettings}
          className="mt-16 p-8 bg-champagne/50 border-l-4 border-gold rounded-lg text-center"
        >
          <p className="text-dark-text font-light">
            Parking available on-site. Valet service provided for guests.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
