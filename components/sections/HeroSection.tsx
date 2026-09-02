'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cross, Heart, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/img/12.jpg)' }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,17,28,0.42)_0%,rgba(20,17,28,0.58)_55%,rgba(20,17,28,0.82)_100%)]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-screen">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(240,218,170,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(240,218,170,0.25) 1px, transparent 1px)',
            backgroundSize: '52px 52px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col items-center justify-center px-4 pb-16 pt-28 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f0daaa]/55 bg-black/30 px-5 py-2 backdrop-blur-sm"
        >
          <Cross className="h-4 w-4 text-[#f0daaa]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#f0daaa] sm:text-xs">
            Holy Matrimony
          </span>
          <Cross className="h-4 w-4 text-[#f0daaa]" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, delay: 0.1 }}
          className="font-serif text-4xl font-light leading-tight tracking-[0.08em] text-[#fff7e8] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          KANDULA <span className="text-[#f0daaa]">&amp;</span> NIRMANI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.25 }}
          className="mt-5 max-w-3xl text-sm leading-relaxed text-[#f8ead0] sm:text-base md:text-lg"
        >
          With grateful hearts before God, we invite you to witness our blessed Christian marriage ceremony and celebrate this joyful beginning with our families.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 rounded-3xl border border-[#f0daaa]/45 bg-black/35 px-6 py-5 backdrop-blur-sm sm:px-10"
        >
          <p className="text-xs uppercase tracking-[0.28em] text-[#f0daaa]">Wedding Date</p>
          <p className="mt-2 font-serif text-2xl text-[#fff7e8] sm:text-3xl">September 20, 2026</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.55 }}
          className="mt-8 flex items-center justify-center text-[#f0daaa]"
        >
          {/* Simple Minimalist Flower Art */}
          <svg className="w-10 h-10 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22V14" />
            <path d="M12 14C8 14 5 11 5 7.5S8 3 12 3s7 4.5 7 8-3 3.5-7 3.5z" />
            <path d="M12 14c-2.5 0-4.5 2-4.5 4.5S9.5 23 12 23s4.5-2 4.5-4.5S14.5 14 12 14z" />
            <circle cx="12" cy="14" r="1.5" fill="currentColor" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
