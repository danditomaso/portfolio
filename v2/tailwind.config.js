module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        // 16: "repeat(16, minmax(0, 1fr))",
        // Complex site-specific column configuration
        section: "115px minmax(300px, 1fr) minmax(300px, 1fr)",
        portfolio: "repeat(2, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        portfolio: "repeat(2, minmax(0, min-content))",
      },
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
      12: "12px",
      24: "24px",
      36: "36px",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
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
  plugins: [],
};
