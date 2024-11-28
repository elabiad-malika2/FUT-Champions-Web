/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./*.html", "./pages/*.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        customGray: '#525352', 
        customText: '#FEF2AD',
      },
    },
  },
  plugins: [],
}

