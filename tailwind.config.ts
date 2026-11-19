import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A1F5C",
          mid: "#1a3178",
          deep: "#060f2a",
        },
        gold: {
          DEFAULT: "#E8A820",
          light: "#F5C842",
        },
      },
      fontFamily: {
        sora: ["Sora", "system-ui", "sans-serif"],
        inter: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
