/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./app.js"
  ],
  theme: {
    colors:{
      white:'hsl(0, 0%, 100%)',
      gray:'hsl(212, 45%, 89%)',
      blue:'hsl(220, 15%, 55%)',
      darkBlue:'hsl(218, 44%, 22%)'
    },
    extend: {
      fontFamily:{
        bodyFont:'bodyFont'
      },
    },
  },
  plugins: [],
}

