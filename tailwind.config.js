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
              50: "#F2F0FF",
              100: "#E0DFF2",
              200: "#BFBDDE",
              300: "#9B98CA",
              400: "#7D79BA",
              500: "#6A65B0",
              600: "#605BAC",
              700: "#504C97",
              800: "#464388",
              900: "#3B3979",
            },
            focus: "#6A65B0",
          },
        },
        light: {
          layout: {},
          colors: {
            primary: {
              DEFAULT: "#6A65B0",
              50: "#F2F0FF",
              100: "#E0DFF2",
              200: "#BFBDDE",
              300: "#9B98CA",
              400: "#7D79BA",
              500: "#6A65B0",
              600: "#605BAC",
              700: "#504C97",
              800: "#464388",
              900: "#3B3979",
            },
            focus: "#6A65B0",
          },
        },
      },
    }),
  ],
};
