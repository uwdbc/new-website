/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#ffd100",
        "gold-dark": "#d8b100",
        dark: "#0d0d0d",
      },
      gridTemplateColumns: {
        "1-to-2": "1fr 2fr",
      },
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
