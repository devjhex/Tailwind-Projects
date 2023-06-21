/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
  ],
  theme: {
    extend: {
      colors:{
        priOrange:' hsl(31, 77%, 52%)',
        priCyan:'hsl(184, 100%, 22%)',
        priDarkCyan:'hsl(179,100%,13%)',
        neuWhite:'hsla(0, 0%, 100%, 0.75)',
        neuGray:'hsla(0,0%,95%)'
      },
      fontFamily:{
        lexend:'lexend',
        big:'big'
      }
    },
  },
  plugins: [],
}

