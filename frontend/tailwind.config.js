/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "basecolor": "#e5e7eb",
        "gray": "#525252",
        "black":"#09090b",
        "blue":"#172554",
        "logo":"#1e40af"
        

      }
    },
  },
  plugins: [],
}