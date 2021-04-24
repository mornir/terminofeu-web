const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: [
        'Nunito',
        'system-ui',
        '-apple-system',
        'Segoe UI',
        'Helvetica Neue',
        'sans-serif',
      ],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: '#000',
      white: '#fff',

      primary: '#F97316',
      'primary-alt': '#c05621',
      'primary-light': '#f3cbb1',

      gray: colors.warmGray,
      orange: colors.orange,
    },
    extend: {},
  },
  variants: {},
}
