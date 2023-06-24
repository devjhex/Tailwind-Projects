/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html'
  ],
  theme: {
    colors:{
      priCyan:'hsl(185, 75%, 39%)',
      priBlue:'hsl(229, 23%, 23%)',
      priGrayishBlue:'hsl(227, 10%, 46%)',
      neuGray:'hsl(0, 0%, 59%)',
      white:'#FFFFFF'
    },
    extend: {
      fontFamily:{
        kumbh:'kumbh'
      },
      backgroundImage:{
        'top':'url(/images/bg-pattern-top.svg)',
        'bottom':'url(/images/bg-pattern-bottom.svg)'
      }
    },
  },
  plugins: [],
}

