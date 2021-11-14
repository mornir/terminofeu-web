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
      animation: {
        exit: 'exit 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        exit: {
          '0%, 100%': { color: '#c05621' },
          '50%': { color: '#F97316' },
        },
      },
    },
  },
}
