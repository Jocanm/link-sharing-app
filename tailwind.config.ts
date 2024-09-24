import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: "#633CFF",
          light: "#BEADFF",
          lightest: "#EFEBFF",
        },
        gray: {
          dark: "#333333",
          DEFAULT: "#737373",
          light: "#FAFAFA",
        },
        borders: "#D9D9D9",
        red: "#FF3939",
      },
    },
  },
  plugins: [],
};
export default config;
