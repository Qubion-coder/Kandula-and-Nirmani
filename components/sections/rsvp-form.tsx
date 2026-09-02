'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { viewportSettings } from '@/lib/animations';

export function RSVPForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '1',
    dietary: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        guests: '1',
        dietary: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  const formFields = [
    { label: 'Full Name', name: 'name', type: 'text', placeholder: 'Enter your name', required: true },
    { label: 'Email', name: 'email', type: 'email', placeholder: 'your@email.com', required: true },
    { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '+1 (555) 000-0000', required: false },
  ];

  return (
    <section className="relative py-20 md:py-32 px-4 bg-gradient-to-b from-ivory to-champagne overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full border border-gold/5"
      />

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={viewportSettings}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-serif font-light text-gold mb-4">RSVP</h2>
          <p className="text-dark-text font-light text-lg">
            Please confirm your attendance by June 1st
          </p>
          <div className="w-16 h-1 bg-gold/30 mx-auto mt-4" />
        </motion.div>

        {/* Form Container */}
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="space-y-6 p-8 bg-white border-2 border-gold/20 rounded-lg"
            >
              {/* Text Input Fields */}
              <div className="grid md:grid-cols-2 gap-6">
                {formFields.map((field, idx) => (
                  <motion.div
                    key={field.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={field.name === 'phone' ? 'md:col-span-2' : ''}
                  >
                    <label className="block text-sm font-light text-dark-text mb-2">
                      {field.label}
                      {field.required && <span className="text-gold ml-1">*</span>}
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      required={field.required}
                      className="w-full px-4 py-2 border-2 border-gold/20 rounded-lg focus:outline-none focus:border-gold transition-all bg-white font-light"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Select Fields */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {/* Number of Guests */}
                <div>
                  <label className="block text-sm font-light text-dark-text mb-2">
                    Number of Guests <span className="text-gold">*</span>
                  </label>
                  <motion.select
                    whileFocus={{ scale: 1.02 }}
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border-2 border-gold/20 rounded-lg focus:outline-none focus:border-gold transition-all bg-white font-light cursor-pointer"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5+ Guests</option>
                  </motion.select>
                </div>

                {/* Dietary Preferences */}
                <div>
                  <label className="block text-sm font-light text-dark-text mb-2">
                    Dietary Preferences
                  </label>
                  <motion.select
                    whileFocus={{ scale: 1.02 }}
                    name="dietary"
                    value={formData.dietary}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border-2 border-gold/20 rounded-lg focus:outline-none focus:border-gold transition-all bg-white font-light cursor-pointer"
                  >
                    <option value="">None</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="gluten-free">Gluten Free</option>
                    <option value="other">Other</option>
                  </motion.select>
                </div>
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label className="block text-sm font-light text-dark-text mb-2">
                  Special Message (Optional)
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  name="message"
                  placeholder="Share your warm wishes..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border-2 border-gold/20 rounded-lg focus:outline-none focus:border-gold transition-all bg-white font-light resize-none"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="flex-1 py-3 px-6 bg-gold text-white font-light rounded-lg hover:bg-gold/90 transition-all duration-300"
                >
                  Submit RSVP
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  type="reset"
                  className="flex-1 py-3 px-6 border-2 border-gold text-gold font-light rounded-lg hover:bg-gold/10 transition-all duration-300"
                >
                  Clear
                </motion.button>
              </motion.div>

              {/* Info Text */}
              <p className="text-center text-sm text-light-gray font-light">
                Your information will be kept confidential and used only for this celebration.
              </p>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="p-12 bg-white border-2 border-gold/20 rounded-lg text-center space-y-6"
            >
              {/* Success Icon */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 0.8,
                  ease: 'easeOut',
                }}
                className="text-6xl"
              >
                ✨
              </motion.div>

              {/* Success Message */}
              <div className="space-y-2">
                <h3 className="text-3xl font-serif font-light text-gold">Thank You!</h3>
                <p className="text-dark-text font-light">
                  We have received your RSVP and are thrilled to celebrate with you!
                </p>
              </div>

              {/* Confirmation Details */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="p-4 bg-champagne/50 rounded-lg"
              >
                <p className="text-sm text-dark-text font-light">
                  A confirmation email has been sent to <br />
                  <span className="font-sans font-semibold">{formData.email}</span>
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
