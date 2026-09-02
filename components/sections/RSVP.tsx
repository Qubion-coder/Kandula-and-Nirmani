'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

interface RSVPFormData {
  name: string;
  email: string;
  phone: string;
  guests: number;
  dietary: string;
  message: string;
  attending: 'yes' | 'no' | '';
}

export default function RSVP() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState<RSVPFormData>({
    name: '',
    email: '',
    phone: '',
    guests: 1,
    dietary: '',
    message: '',
    attending: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'guests' ? parseInt(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        guests: 1,
        dietary: '',
        message: '',
        attending: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section
      ref={ref}
      className="relative py-24 px-6 bg-background overflow-hidden"
    >
      <div className="max-w-2xl mx-auto">
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
            RSVP
          </h2>
          <p className="text-lg font-light text-foreground mb-4">
            Please confirm your attendance by June 10, 2026
          </p>
          <div
            className="w-16 h-1 mx-auto"
            style={{ backgroundColor: 'var(--primary)' }}
          />
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-lg p-8 md:p-12 bg-white relative overflow-hidden"
          style={{
            boxShadow:
              '0 20px 60px rgba(212, 175, 55, 0.15), 0 0 40px rgba(212, 175, 55, 0.08)',
          }}
        >
          {/* Gold border */}
          <div
            className="absolute inset-0 rounded-lg border-2 pointer-events-none"
            style={{ borderColor: 'var(--primary)' }}
          />

          {submitted ? (
            <motion.div
              className="relative z-10 text-center py-12"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-serif text-foreground mb-2">
                Thank You!
              </h3>
              <p className="text-lg font-light text-muted">
                We've received your RSVP and look forward to celebrating with
                you.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              {/* Attendance */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="attending"
                    className="block text-sm uppercase tracking-widest font-light mb-3"
                    style={{ color: 'var(--primary)' }}
                  >
                    Will You Attend?
                  </label>
                  <select
                    id="attending"
                    name="attending"
                    value={formData.attending}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-offset-2"
                    style={{
                      borderColor: 'var(--border)',
                      '--tw-ring-color': 'var(--primary)',
                    } as React.CSSProperties}
                  >
                    <option value="">Select...</option>
                    <option value="yes">Yes, I'll be there</option>
                    <option value="no">Regretfully, I cannot attend</option>
                  </select>
                </div>

                {formData.attending === 'yes' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <label
                      htmlFor="guests"
                      className="block text-sm uppercase tracking-widest font-light mb-3"
                      style={{ color: 'var(--primary)' }}
                    >
                      Number of Guests
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-offset-2"
                      style={{
                        borderColor: 'var(--border)',
                        '--tw-ring-color': 'var(--primary)',
                      } as React.CSSProperties}
                    >
                      {[1, 2, 3, 4].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </motion.div>
                )}
              </div>

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm uppercase tracking-widest font-light mb-3"
                  style={{ color: 'var(--primary)' }}
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-offset-2"
                  style={{
                    borderColor: 'var(--border)',
                    '--tw-ring-color': 'var(--primary)',
                  } as React.CSSProperties}
                  placeholder="Your name"
                />
              </div>

              {/* Email and Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm uppercase tracking-widest font-light mb-3"
                    style={{ color: 'var(--primary)' }}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-offset-2"
                    style={{
                      borderColor: 'var(--border)',
                      '--tw-ring-color': 'var(--primary)',
                    } as React.CSSProperties}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm uppercase tracking-widest font-light mb-3"
                    style={{ color: 'var(--primary)' }}
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-offset-2"
                    style={{
                      borderColor: 'var(--border)',
                      '--tw-ring-color': 'var(--primary)',
                    } as React.CSSProperties}
                    placeholder="+94 771 234567"
                  />
                </div>
              </div>

              {/* Dietary Restrictions */}
              {formData.attending === 'yes' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <label
                    htmlFor="dietary"
                    className="block text-sm uppercase tracking-widest font-light mb-3"
                    style={{ color: 'var(--primary)' }}
                  >
                    Dietary Restrictions
                  </label>
                  <input
                    id="dietary"
                    name="dietary"
                    type="text"
                    value={formData.dietary}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-offset-2"
                    style={{
                      borderColor: 'var(--border)',
                      '--tw-ring-color': 'var(--primary)',
                    } as React.CSSProperties}
                    placeholder="E.g., Vegetarian, Gluten-free"
                  />
                </motion.div>
              )}

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm uppercase tracking-widest font-light mb-3"
                  style={{ color: 'var(--primary)' }}
                >
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border-2 bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 resize-none"
                  style={{
                    borderColor: 'var(--border)',
                    '--tw-ring-color': 'var(--primary)',
                  } as React.CSSProperties}
                  placeholder="Share your wishes and well-wishes..."
                />
              </div>

              {/* Submit button */}
              <motion.button
                type="submit"
                className="w-full py-4 rounded-lg font-light text-lg uppercase tracking-widest transition-all duration-300"
                style={{
                  backgroundColor: 'var(--primary)',
                  color: 'var(--primary-foreground)',
                }}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                Confirm RSVP
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
