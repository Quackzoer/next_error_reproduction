/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        customSerif: ["Playfair Display", "serif"],
        customSans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
}
