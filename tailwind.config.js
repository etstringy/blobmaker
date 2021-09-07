module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: "Inter",
        discord: "Whitney"
      },
      colors: {
        "greyple": "#2c2f33"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
