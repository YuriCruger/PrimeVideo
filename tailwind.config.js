/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bluePrime: '#00050D',
        blueHover: '#33373D',
        blueWatch: '#1A98FF',
        grayText: '#AAA5A0',
        grayButton: '#333333'
      }
    },
  },
  plugins: [],
}

