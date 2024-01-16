import { plugin } from "postcss";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-inter)", "System UI", "sans-serif"],
    },

    screens: {
      xs: "320px",
      sm: "640px",
      md: "810px",
      lg: "1200px",
      xl: "1500px",
      "2xl": "1700px",
    },
    extend: {
      backgroundImage: {
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("tailwind-fluid-typography"),
    require("tailwindcss-animate"),
    require("tailwindcss-3d"),
  ],
};
export default config;
