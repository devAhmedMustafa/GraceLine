/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#ff472f',
        minor: "#FB1D00",
        background: "#FFE6DB",
        accent: "#2E82FF",
      }
    },
  },
  plugins: [],
}