/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': {'min': '0px', 'max': '767px'},

      'md': {'min': '768px', 'max': '1280px'},

      'lg': {'min': '1281px', 'max': '2879px'},

    },
  },
  plugins: [],
}

