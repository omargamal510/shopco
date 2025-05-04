import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "grey-black": "#0000009c",
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: "#FFF",
            darkPrimary: "#000",
          },
        },
        dark: {
          colors: {
            primary: "#000",
            darkPrimary: "#FFF",
          },
        },
        // ... custom themes
      },
    }),
  ],
};
