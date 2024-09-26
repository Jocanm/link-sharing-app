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
      fontSize: {
        'heading-m': ['2rem', {
          lineHeight: '3rem',
          fontWeight: '700'
        }],
        'heading-s': ['1rem', {
          lineHeight: '1.5rem',
          fontWeight: '600'
        }],
        'body-m': ['1rem', {
          lineHeight: '1.5rem',
          fontWeight: '400'
        }],
        'body-s': ['0.75rem', {
          lineHeight: '1.125rem',
          fontWeight: '400'
        }],
      },
    },
  },
  plugins: [],
};
export default config;
