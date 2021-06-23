module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
      },
      fontFamily: {
        'sans': ['League Spartan Variable']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
