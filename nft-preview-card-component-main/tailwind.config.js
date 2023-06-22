/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html'
  ],
  theme: {
    colors:{
      priBlue:'hsl(215, 51%, 70%)',
      priCyan:'hsl(178,100%,50%)',
      neuMainBg:'hsl(217, 54%, 11%)',
      neuCardBg:'hsl(216, 50%, 16%)',
      neuLine:'hsl(215, 32%, 27%)',
      neuWhite:'hsl(0, 0%, 100%)'
    },
    extend: {
      fontFamily:{
        outfit:'outfit'
      }
    },
  },
  plugins: [],
}

