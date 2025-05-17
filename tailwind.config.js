/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      secondary: "#151312",
      primary: "#030014",
      accent: "#ab8bff",
      light: {
        100: "#d6c6ff",
        200: "#a8b5db",
        300: "#9ca4ab",
      },
      dark: {
        100: "#22153d",
        200: "#0f0d23",
      },
    },
  },
  plugins: [],
};
