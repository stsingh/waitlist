/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'scroll-slow': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-66.666%)' }
        },
        'scroll-medium': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-66.666%)' }
        },
        'scroll-fast': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-66.666%)' }
        },
        'squiggly': {
          '0%': { transform: 'scaleX(0)', 'transform-origin': 'left' },
          '50%': { transform: 'scaleX(1.1)', 'transform-origin': 'left' },
          '100%': { transform: 'scaleX(1)', 'transform-origin': 'left' }
        }
      },
      animation: {
        'scroll-slow': 'scroll-slow 45s linear infinite',
        'scroll-medium': 'scroll-medium 30s linear infinite',
        'scroll-fast': 'scroll-fast 25s linear infinite',
        'squiggly': 'squiggly 0.5s ease-in-out forwards'
      },
      perspective: {
        '1000': '1000px',
      },
      transformStyle: {
        '3d': 'preserve-3d',
      }
    },
  },
  plugins: [],
}

