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
      customcolors: {
        'my-header': '#f0f2f5',
        'my-red': '#FF0000',
        'my-green': '#00FF00',
        'my-yellow': '#FFFF00',
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
};
