/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    extend: {
         backdropBlur: {
        xs: '2px',
      }
    },
        animation: {
        'infinite-scroll': 'infinite-scroll 45s linear infinite',
        'infinite-scroll-reverse': 'infinite-scroll-reverse 45s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'infinite-scroll-reverse': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },
  },
  },
  plugins: [],
};
