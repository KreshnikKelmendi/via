/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Verdana-Bold', 'sans'],
        custom1: ['Verdana', 'sans'],
      },
    },
  },
  plugins: [],
}