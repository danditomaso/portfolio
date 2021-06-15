module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./partials/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Inter"],
    },
    container: {
      center: true,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
