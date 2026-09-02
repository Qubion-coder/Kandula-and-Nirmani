'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const timelineItems = [
  {
    id: 1,
    title: 'Engagement',
    description: 'A sacred moment when two souls promise forever',
    icon: '💍',
  },
  {
    id: 2,
    title: 'Poruwa Ceremony',
    description: 'The sacred union on the traditional wedding stage',
    icon: '🌸',
  },
  {
    id: 3,
    title: 'Blessings',
    description: 'Family and friends bestow their love and wishes',
    icon: '🙏',
  },
  {
    id: 4,
    title: 'Reception',
    description: 'Celebration of joy, laughter, and new beginnings',
    icon: '✨',
  },
];

export default function TraditionsTimeline() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light text-primary mb-4">
            Wedding Traditions
          </h2>
          <p className="text-lg text-text-muted font-light">
            Sri Lankan Kandyan Wedding Journey
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ height: 0 }}
            animate={inView ? { height: '100%' } : {}}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary via-secondary to-secondary opacity-40 -translate-x-1/2"
          />

          {/* Timeline items */}
          <div className="space-y-12 md:space-y-16">
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className={`flex gap-8 md:gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Content */}
                <div className="flex-1">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.15 + 0.2 }}
                    className={`${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center md:text-inherit`}
                  >
                    <h3 className="text-2xl md:text-3xl font-light text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-text-muted font-light leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Center icon */}
                <div className="flex-shrink-0 flex justify-center">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.1 }}
                    className="w-20 h-20 rounded-full border-4 border-secondary bg-white flex items-center justify-center text-4xl shadow-lg"
                  >
                    {item.icon}
                  </motion.div>
                </div>

                {/* Right side (empty for layout) */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
