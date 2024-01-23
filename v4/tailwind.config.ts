import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      height: {
        128: "28rem",
      },
      colors: {
        "secondary-color": "var(--secondary-color)",
        "primary-color": "var(--primary-color)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-old-standard)", ...defaultTheme.fontFamily.serif],
      },
      fontSize: {
        "9vw": "9vw",
        "8vw": "8vw",
        "7vw": "7vw",
        "6vw": "6vw",
        "5vw": "5vw",
        "4vw": "4vw",
        "3vw": "3vw",
        "2vw": "2vw",
        "1vw": "1vw",
        "0.5vw": "0.5vw",
        "0.25vw": "0.25vw",
        "0.1vw": "0.1vw",
        "0.05vw": "0.05vw",
        "0.01vw": "0.01vw",
        homepageDescription: "6vw",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
