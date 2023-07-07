/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        customRed: "#FFDCF3",
        customBlue: "#D7FFFF",
        textColorRed: "#E142AA",
        textColorBlue: "#73FFFF",
        myColor: "#6D28D9",
      },
    },
  },
  plugins: [],
};
