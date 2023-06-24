/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html'
  ],
  theme: {
    colors:{
      priCyan:'hsl(179, 62%, 43%)',
      priYellow:'hsl(71, 73%, 54%)',
      neuGray:'hsl(204, 43%, 93%)',
      neuBlue:'hsl(218, 22%, 67%)',
      white:'#FFFFFF'
      },
    extend: {
      fontFamily:{
        karla:'karla'
    }
    },
  },
  plugins: [],
}

