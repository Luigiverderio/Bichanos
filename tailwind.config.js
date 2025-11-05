/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        lilita: ['Lilita One', 'sans-serif'],
      },
    },
    screens: {
      'max-cel': { 'max': '450px' }, // Adiciona um breakpoint para telas com largura máxima de 400px
    }
  },
  plugins: [],
}