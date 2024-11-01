/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/index.html",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#1E90FF',
        secondary: '#FF6347',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
