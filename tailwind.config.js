/*eslint-disable*/
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          layout: {},
          colors: {
            foreground: "#000000",
            background: "#ffffff",
            primary: {
              DEFAULT: "#6A65B0",
            },
            focus: "#6A65B0",
          },
        },
        light: {
          layout: {},
          colors: {
            primary: {
              DEFAULT: "#6A65B0",
            },
            focus: "#6A65B0",
          },
        },
      },
    }),
  ],
};
