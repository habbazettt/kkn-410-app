/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3B6958',
        'secondary': '#057D35',
        'tertiary': '#F99B1C',
      }
    },
  },
  plugins: [],
}