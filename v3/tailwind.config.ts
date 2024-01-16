import { type Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        contactMeBlue: "#21324c",
      },
      spacing: {
        "128": "30rem",
      },
      gridTemplateColumns: {
        section: "115px repeat(2, minmax(0px, 1fr))",
      },
      borderWidth: {
        10: "10px",
        12: "12px",
        16: "16px",
        20: "20px",
      },
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Playfair Display", "serif"],
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
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        // https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode
        ".horizontal-writing-tb": { "writing-mode": "horizontal-tb" },
        ".vertical-writing-rl": { "writing-mode": "vertical-rl" },
        ".vertical-writing-lr": { "writing-mode": "vertical-lr" },
      });
    }),
  ],
};

export default config;
