/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");


module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'grid-04': 'repeat(auto-fit, minmax(min(100%, 15rem), 1fr))'
      }
    },
    screens: {
      '2xl': { 'max': '1536px' },
      'xl': { 'max': '1280px' },
      'lg': { 'max': '1024px' },
      'md': { 'max': '750px' },
      'sm': { 'max': '640px' },
      'xs': {'max': '475px'}
    },


  },
  plugins: [],
});