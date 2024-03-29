/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      width:{'300': '300px'}
    },
    screens:{
      'dosh': {'max': '1000px'},
    }
  },
  plugins: [],
}

