/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#fff",
      black: "#000",
      transparent: "transparent",
      cyan: {
        100: "hsl(180, 52%, 96%)",
        200: "hsl(180, 31%, 95%)",
        600: "hsl(180, 29%, 50%)",
        800: "hsl(180, 8%, 52%)",
        900: "hsl(180, 14%, 20%)",
      },
    },
    fontFamily: {
      sans: ["League Spartan", "sans-serif"],
    },
    fontWeight: {
      normal: 500,
      bold: 700,
    },
    extend: {
      screens: {
        xs: "425px",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
