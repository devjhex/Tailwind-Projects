/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html'
  ],
  theme: {
    colors:{
      priMainBG:'hsl(233, 47%, 7%)',
      priCardBG:'hsl(244,38%,16%)',
      priAccent:'hsl(277,64%,61%)',
      neuHeading:'hsl(0,0%,100%)',
      neuParagraph:'hsla(0,0%,100%,0.75)',
      neuStatsHeading:'hsla(0,0%,100%,0.6)'
    },
    extend: {
      fontFamily:{
        lexend:"lexend",
        inter:"inter"
      }
    },
  },
  plugins: [],
}

