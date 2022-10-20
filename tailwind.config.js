/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    '.my-rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
    '.preserve-3d': {
      transformStyle: 'preserve-3d',
    },
    '.perspective': {
      perspective: '1000px',
    },
    '.backface-hidden': {
      backfaceVisibility: 'hidden',
    },
  });
});

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: { signature: ['Great Vibes'] },
  },
  plugins: [
    Myclass,
    plugin(function ({ addComponents }) {
      addComponents({
        '.card-left': {
          transform: 'translateX(-100%) scale(0.9)',
          transition: '500ms',
          opacity: '0.6',
        },
        '.card-right': {
          transform: 'translateX(100%) scale(0.9)',
          transition: '500ms',
          opacity: '0.6',
        },
        '.card-active': { transform: 'scale(1)', opacity: '1' , z : '99'},
      });
    }),
  ],
};
