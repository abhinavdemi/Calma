/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#FDFAF6',
          100: '#F7F2EB',
          200: '#EDE5D8',
          300: '#DDD0BE',
          400: '#C4AE96',
          500: '#A8906F',
          600: '#8B7355',
          700: '#6E5940',
          800: '#4A3A29',
          900: '#2C2118',
        },
        sage: {
          100: '#E8F0E6',
          200: '#C8DBC5',
          300: '#A8C5A0',
          400: '#88AA80',
          500: '#6A9062',
        },
        clay: {
          100: '#F5E6DC',
          200: '#E8C9B5',
          300: '#D4A88A',
        },
      },
      fontFamily: {
        serif: ['var(--font-lora)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      animation: {
        'breathe-slow': 'breathe 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'dot-bounce': 'dotBounce 1.4s ease-in-out infinite',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.3' },
          '50%': { transform: 'scale(1.15)', opacity: '0.5' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.05)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        dotBounce: {
          '0%, 80%, 100%': { transform: 'scale(0.6)', opacity: '0.4' },
          '40%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionDuration: {
        400: '400ms',
        600: '600ms',
        800: '800ms',
      },
    },
  },
  plugins: [],
};
