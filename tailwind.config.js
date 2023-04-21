const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      width: {
        '110': '36rem',
        '128': '48rem',
      },
      height: {
        '110': '36rem',
        '128': '48rem',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
