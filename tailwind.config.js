const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  darkMode: false,
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
    extend: {
      colors: {
        primary: '#F97316',
        'primary-alt': '#c05621',
        'primary-light': '#f3cbb1',
        gray: colors.warmGray,
        orange: colors.orange,
      },
    },
  },
}
