'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, MapPin, Navigation, Sparkles } from 'lucide-react';
import Image from 'next/image';

const LIVE_LOCATION_URL = 'https://maps.app.goo.gl/g6oyNtHyeSor7Uwx6';
const FUNCTION_LOCATION_URL = 'https://maps.app.goo.gl/g6oyNtHyeSor7Uwx6';

export default function VenueLocation() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[linear-gradient(180deg,#fff9ef_0%,#fff2df_42%,#fde8d4_100%)] px-4 py-24 sm:px-6 lg:px-8 md:py-32"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 55, 0], y: [0, 35, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-[12%] -top-[8%] h-[52vw] w-[52vw] rounded-full bg-gradient-to-br from-[#ffd0d9] to-[#ffe9c9] opacity-75 blur-[110px]"
        />
        <motion.div
          animate={{ x: [0, -45, 0], y: [0, -45, 0], scale: [1, 1.18, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -right-[10%] top-[34%] h-[44vw] w-[44vw] rounded-full bg-gradient-to-tl from-[#eadcff] to-[#ffdfe9] opacity-60 blur-[110px]"
        />
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 11px 11px, rgba(181,124,83,0.38) 1px, transparent 1px)',
            backgroundSize: '34px 34px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, type: 'spring', stiffness: 100 }}
          className="mb-14 text-center md:mb-20"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d8a97d]/45 bg-white/70 px-5 py-2.5 shadow-[0_10px_28px_rgba(195,137,94,0.22)] backdrop-blur-md"
          >
            <Sparkles className="h-4 w-4 text-[#c0784e]" />
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#c0784e] sm:text-sm">
              Banquet Hall Location
            </span>
          </motion.div>

          <h2 className="font-serif text-4xl font-medium tracking-tight text-[#4a332f] sm:text-5xl md:text-7xl">
            Venue <span className="relative inline-block text-[#c06f58]">
              Location
              <motion.svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full"
                viewBox="0 0 100 20" preserveAspectRatio="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              >
                <motion.path
                  d="M0 10 Q 25 20, 50 10 T 100 10"
                  fill="none"
                  stroke="#d79c74"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </motion.svg>
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-12 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative h-[320px] w-full overflow-hidden rounded-[2rem] border border-[#f2ddc5] bg-white/65 shadow-[0_16px_50px_rgba(184,126,89,0.2)] backdrop-blur-xl sm:h-[420px] md:h-[500px] lg:col-span-8"
          >
            <Image 
              src="/hotel.jpg"
              alt="Hotel Green Court"
              fill
              className="object-contain object-center p-4 pb-[100px] sm:pb-[120px]"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-black/10" />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/95 to-transparent p-4 pt-16 sm:p-6 md:p-8">
              <a
                href={LIVE_LOCATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 rounded-2xl border border-[#efdcc8] bg-white/85 px-4 py-3 shadow-[0_10px_30px_rgba(183,127,92,0.16)] transition-all hover:bg-white sm:px-5 sm:py-4"
              >
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#be7f56]">Live Location</p>
                  <h4 className="mt-1 font-serif text-lg text-[#4d3732] sm:text-2xl">Hotel Green court</h4>
                </div>
                <motion.div whileHover={{ scale: 1.08 }} className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ca7c57] text-white shadow-md">
                  <Navigation className="h-5 w-5" />
                </motion.div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-4"
          >
            <div className="h-full rounded-[2rem] border border-[#f1dcc5] bg-[linear-gradient(180deg,rgba(255,255,255,0.78)_0%,rgba(255,245,232,0.8)_100%)] p-6 shadow-[0_16px_45px_rgba(183,127,92,0.14)] backdrop-blur-xl md:p-7">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#deb792]/40 bg-white/70 px-4 py-2">
                <MapPin className="h-4 w-4 text-[#c0784e]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c0784e]">Venue Details</span>
              </div>

              <h3 className="font-serif text-3xl leading-tight text-[#4d3732] md:text-4xl">
                Hotel Green court
              </h3>

              <p className="mt-5 text-sm leading-relaxed text-[#7a6258] md:text-base">
                We warmly invite you to join us at Hotel Green court for our wedding celebration.
              </p>

              <a
                href={LIVE_LOCATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ca7c57] px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-[0_12px_28px_rgba(183,109,72,0.35)] transition-transform hover:scale-[1.02]"
              >
                Open Live Location
                <ExternalLink className="h-4 w-4" />
              </a>

              <div className="mt-6 rounded-2xl border border-[#ead2b9]/60 bg-white/75 p-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#b78058]">Map Link</p>
                <p className="mt-2 break-all text-xs text-[#7a6258]">
                  maps.app.goo.gl/g6oyNtHyeSor7Uwx6
                </p>
              </div>


            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
