/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/views/**/*.vue',
    './src/components/**/*.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        darkGreen: '#2c2f1c',
        grey: '#797768',
        darkBrown: '#8e6942',
        cream: '#e5cb98',
        lightBrown: '#b9a17d',
        brown: '#af7955',
        pink: '#eabd9c',
        egg: '#ebe8d7',
        white: '#f0efeb',
      },
      backgroundImage: {
        'debris-bside-gradient': 'linear-gradient(to bottom, rgba(240, 239, 235, 0.3), rgb(0, 0, 0)), url("/assets/backgrounds/debris-bside.avif");',
      },
      screens: {
        'mobile': '320px',
        // => @media (min-width: 320px) { ... }
  
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
