/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 10px 25px -10px rgba(0,0,0,0.15)',
      },
      keyframes: {
        fade: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fade: 'fade 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
}
