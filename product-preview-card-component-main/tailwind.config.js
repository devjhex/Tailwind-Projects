/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    colors:{
      'green':'#3c8067',
      'cream':'#f2ebe3',
      'darkBlue':'#1c232b',
      'lightBlue':'#6c7289',
      'white':'#ffffff'
    },
    fontFamily:{
      "fraunces":['Fraunces', "serif"],
      'montserrat':['Montserrat', "sans-serif"]
    },
    extend: {},
  },
  plugins: [],
}

/*  ### Primary

- Dark cyan: hsl(158, 36%, 37%)
- Cream: hsl(30, 38%, 92%)

### Neutral

- Very dark blue: hsl(212, 21%, 14%)
- Dark grayish blue: hsl(228, 12%, 48%)
- White: hsl(0, 0%, 100%)

### Body Copy

- Font size (paragraph): 14px

### Font

- Family: [Montserrat](https://fonts.google.com/specimen/Montserrat)
- Weights: 500, 700

- Family: [Fraunces](https://fonts.google.com/specimen/Fraunces)
- Weights: 700

*/