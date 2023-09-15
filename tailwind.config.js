/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    colors: {
      gold: "#ffd100",
      black: "#000000",
      white: "#ffffff",
      transparent: "rgba(0, 0, 0, 0)",
    },
    fontFamily: {
      sans: [
        "Montserrat",
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32',
        },
      ],
    },
  },
  plugins: [],
};
