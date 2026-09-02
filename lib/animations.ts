// Animation configurations for the wedding website
export const animations = {
  // Envelope opening animation sequence
  envelope: {
    closed: {
      opacity: 1,
      scale: 1,
    },
    opening: {
      flap: {
        rotateX: 180,
        transition: {
          duration: 1,
          ease: 'easeInOut',
        },
      },
      card: {
        y: [0, -50],
        opacity: [0, 1],
        transition: {
          duration: 1.5,
          ease: 'easeOut',
          delay: 0.8,
        },
      },
    },
  },

  // Section reveal animations (scroll triggered)
  reveal: {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  },

  // Staggered children animations
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  },

  staggerItem: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  },

  // Floating animation for decorative elements
  float: {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    },
  },

  // Sparkle/shimmer animation
  sparkle: {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      transition: {
        duration: 2,
        ease: 'easeOut',
      },
    },
  },

  // Glow pulse animation
  glow: {
    animate: {
      boxShadow: [
        '0 0 10px rgba(212, 175, 55, 0.3)',
        '0 0 20px rgba(212, 175, 55, 0.6)',
        '0 0 10px rgba(212, 175, 55, 0.3)',
      ],
      transition: {
        duration: 2,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    },
  },

  // Hover glow effect
  hoverGlow: {
    whileHover: {
      boxShadow: '0 0 30px rgba(212, 175, 55, 0.4)',
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  },

  // Scale up on hover
  hoverScale: {
    whileHover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    whileTap: {
      scale: 0.98,
    },
  },

  // Countdown number flip
  flip: {
    animate: {
      rotateX: [0, 360],
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  },

  // Parallax scroll effect (returned as a function to apply offset)
  parallax: (offset: number) => ({
    transform: `translateY(${offset * 0.5}px)`,
    transition: 'transform 0.3s ease-out',
  }),
};

// Transition presets
export const transitions = {
  smooth: {
    duration: 0.3,
    ease: 'easeInOut',
  },
  slowSmooth: {
    duration: 0.8,
    ease: 'easeInOut',
  },
  cinematic: {
    duration: 1.2,
    ease: 'easeInOut',
  },
};

// Viewport settings for scroll animations
export const viewportSettings = {
  once: true,
  amount: 0.3,
  margin: '0px 0px -100px 0px',
};
