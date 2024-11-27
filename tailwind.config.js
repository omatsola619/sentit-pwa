/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
      },
      colors: {
        primary: '#1F1B57',
        secondary: '#00B3FF',
        accent: '#ECF7FF',
        accentLight: '#ecf7ff',
      },
      backgroundImage: {
        homeBg: "url('./assets/map-bg.png')",
      },
    },
  },
  plugins: [],
};
