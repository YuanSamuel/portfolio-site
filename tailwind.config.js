module.exports = {
  important: '#app',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
      },
      fontFamily: {
        sans: ['League Spartan Variable'],
      },
      width: {
        '30vh': '30vh',
        '40vh': '40vh',
      },
      minWidth: {
        '30vh': '30vh',
        '40vh': '40vh',
      },
      maxWidth: {
        '30vh': '30vh',
        '40vh': '40vh',
      },
      height: {
        '30vh': '30vh',
        '40vh': '40vh',
        '80vh': '80vh',
      },
      maxHeight: {
        '30vh': '30vh',
        '40vh': '40vh',
      },
      minHeight: {
        '30vh': '30vh',
        '40vh': '40vh',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
