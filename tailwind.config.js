/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        'shooting-star': {
          '0%': { top: '-50px' },
          '100%': { top: '100vh' },
        },
          
        'hue-rotate': {
            '0%': { filter: 'hue-rotate(0deg)' },
            '100%': { filter: 'hue-rotate(360deg)' },
          },
          'twinkle': {
            '0%, 100%': { opacity: '0.1', transform: 'scale(1)', filter: 'brightness(2)' },
            '50%': { opacity: '0.9', transform: 'scale(1.3)', filter: 'brightness(1)' }, // Scale stars and increase brightness
          },
        
      
      },
      animation: {
        'hue-rotate': 'hue-rotate 10s infinite linear',
        'shooting-star': 'shootingStar 1s linear infinite', 
        'twinkle': 'twinkle 3s infinite ease-in-out',
        
      },
      // animation: {
      //   shootingStar: 'shootingStar 1s linear infinite', // Adjust timing as needed
      // },
      colors: {
        // secondary: "peachpuff",
        stop1:'#6eff01',
        stop2:'#ff0047',
        secondary: 'yellow',
        white: colors.white,
        black: colors.black,
        cyan: colors.cyan,
        transparent: colors.transparent,
        main: 'rgb(1, 1, 24)',
        yellow: colors.yellow,
      },
    },
    
  },
  plugins: [],
}
