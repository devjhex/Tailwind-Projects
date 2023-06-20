/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './app.js'
  ],
  theme: {
    extend: {
      colors:{
        priBlue:'#e0e8ff',
        priBrightBlue:'#3829e0',
        neuPaleBlue:'#f5f7ff',
        neuDesaturatedBlue:'#7280a7',
        neuDarkBlue:'#1f2f56'
      },
      fontFamily:{
        primary:'bodyFont'
      },
    },
  },
  plugins: [],
}

