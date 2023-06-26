/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html'
  ],
  theme: {
    colors:{
        priMagenta:'hsl(300, 43%, 22%)',
        priPink:'hsl(333, 80%, 67%)',
        neuMagenta:'hsl(303, 10%, 53%)',
        neuLightMagenta:'hsl(300, 24%, 96%)',
        white:'hsl(0, 0%, 100%)'
    },
    extend: {
      fontFamily:{
        spartan:'spartan'
      },
      backgroundImage:{
        'mobile-top':'url(./images/bg-pattern-top-mobile.svg)',
        'mobile-bottom':'url(./images/bg-pattern-bottom-mobile.svg)',
        'desktop-top':'url(./images/bg-pattern-top-desktop.svg)',
        'desktop-bottom':'url(./images/bg-pattern-bottom-desktop.svg)'
      }
    },
  },
  plugins: [],
}

