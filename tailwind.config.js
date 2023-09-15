/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["customFont", "poppins"],
        mycustomfont: ["Merriweather", "poppins"],
        mycustomfontRubik: ["Rubik", "Merriweather"],
      },
      textColor: {
        fontTextColor: ["#767676"],
      },
    },
  },
  plugins: [],
};
