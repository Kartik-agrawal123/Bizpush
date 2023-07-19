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
        myColorGray: "#E5D9DE",
        myColorBlue: "#DCE4E4",
        homeColor: "#6B79A1",
        myColor: "#525E7C",
        myDash: "rgb(149,159,183)",
        textCustom: "#6B7A99",
        cardColor: "#FAFBFD",
      },
      screens: {
        "2xl": "1380px", // Custom breakpoint
      },

      fontSize: {
        ss: "0.5rem",
        ts: "0.65rem",
      },
    },
  },
  plugins: [],
};
