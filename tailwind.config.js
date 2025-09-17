/** @type {import('tailwindcss').Config} */
/* eslint-disable no-undef */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Roboto Mono, monospace',
    },

    extend: {
      colors: {
        stone: {
          800: '#292524',
        },
        pizza: '#123456',
      },
      height: {
        screen: '100dvh',
      },
    },
  },
  plugins: [],
};
