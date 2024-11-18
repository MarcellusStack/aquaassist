/** @type {import('tailwindcss').Config} */
const { colors } = require("./constants/colors");

module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        tertiary: colors.tertiary,
        textColor: colors.text,
      },
      borderRadius: {
        "4xl": "32px",
      },
    },
  },
  plugins: [],
};
