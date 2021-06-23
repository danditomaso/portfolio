module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
      24: "24px",
    },
    extend: {
      colors: {
        contactMeBlue: "#21324c",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        // 16: "repeat(16, minmax(0, 1fr))",
        // Complex site-specific column configuration
        section: "115px minmax(0px, 1fr) minmax(0px, 1fr)",
        portfolio: "minmax(0, 1fr) minmax(0, 32rem)",
      },
      gridTemplateRows: {
        portfolio: "repeat(2, minmax(0, min-content))",
      },
    },
    fontFamily: {
      sans: ["Noto Sans JP", "sans-serif"],
      serif: ["Playfair Display", "serif"],
    },
    container: {
      center: true,
    },
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
