/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: {
            DEFAULT: '#46A235',
            light: '#61C44F',
            dark: '#03502B',
            50: '#F0FDF0',
            100: '#DCFCE0',
            200: '#BBF7C4',
            700: '#046B39',
            800: '#03502B',
            900: '#02361D',
          },
          gold: {
            DEFAULT: '#B8860B',
            light: '#D4A017',
            dark: '#8B6914',
            50: '#FDF8EE',
            100: '#FAF0D0',
            400: '#D4A017',
            500: '#B8860B',
            600: '#8B6914',
          },
          cream: '#FFFFFF',
          earth: '#03502B',
          dark: '#02361D',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'counter': 'counter 2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
