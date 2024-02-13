/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        blue: {
          100: "#d6d8f5",
          200: "#a9aeed",
          300: "#7a80e6",
          400: "#5359df",
          500: "#3c42dc",
          600: "#3035dc",
          700: "#2429c3",
          800: "#1e23af",
          900: "#131e9a"
        }
      },
    },
  },
  plugins: [],
}

