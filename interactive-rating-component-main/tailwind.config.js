/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './app.js'

],
  theme: {
    extend: {
      fontFamily:{
        base:'bodyFont',
      },
      
      colors:{
      orange:'#fb7413',
      white:'#ffffff',
      lightGrey:'#959eac',
      midGrey:'#7c8798',
      darkGrey:'#252d37',
      darkBlue:'#121417'
      },
     
    },
  },
  plugins: [],
}

