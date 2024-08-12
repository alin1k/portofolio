import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0B1215",
          light: "#23292c"
        },
        light: {
          DEFAULT: "#f1f1f1",
          dark: "#a8a8a8"
        },
        accent: {
          DEFAULT: "#db70b8"
        }
      },
      fontFamily:{
        text: ["var(--font-dm-sans)", ...fontFamily.sans],
        heading: ["var(--font-rubik)", ...fontFamily.sans]
      }
    },
  },
  plugins: [],
};
export default config;
