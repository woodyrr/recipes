module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'grill-cooking': "url('/src/assets/grill.svg')",
        'pina-sec': "url('/src/assets/hero-imagehc.jpg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

