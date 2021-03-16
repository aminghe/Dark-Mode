module.exports = {
  purge: ['./src/**/*.tsx'],
  darkMode: 'class', // <= 'media' or 'class'
  theme: {
    typography: (theme) => ({}),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('tailwindcss-dark-mode')(),
    // require('@tailwindcss/typography')
  ],
}