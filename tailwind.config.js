import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: "#F00",
            // navBg: "#FFFFFFB2",
            // gridDropBg: "#0000004D",

            // prime: "#f11320",
            // secondary: "#27b37b",
            // tritory: "#3f9cbd",
            // forth: "#737373",
            // fifth: "#9747FF",
            // sixth: "#00A79D",
            // sixth50: "hsl(175.66deg 91.21% 17.84%)",
            // mainColor: "#000",
            // mainColor2: "#FFF",
          },
        },
        dark: {
          colors: {
            primary: "#00F",
            // navBg: "#051b22e5",
            // gridDropBg: "#FFFFFF4D",
            // prime: "#F55661",
            // secondary: "#13F198",
            // tritory: "#13B6F1",
            // forth: "#737373",
            // fifth: "#9747FF",
            // sixth: "#00A79D",
            // mainColor: "#FFF",
            // mainColor2: "#000",
          },
        },
        // ... custom themes
      },
    }),
  ],
};
