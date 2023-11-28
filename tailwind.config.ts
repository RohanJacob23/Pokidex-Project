const { nextui } = require("@nextui-org/react");

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fugaz: ["var(--font-fugaz)"],
        comfortaa: ["var(--font-comfortaa)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: "#120203",
            foreground: "#FDEDED",
            primary: {
              DEFAULT: "#E94449",
            },
            secondary: {
              DEFAULT: "#F6BB3C",
            },
            accent: "#A23F9B",
          },
        },
      },
    }),
  ],
};
export default config;
