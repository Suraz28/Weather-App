/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/**/*.vue',
    './src/**/*.jsx',
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'light-grey': '#97cadb',
        'light': '#C4FFF9',
        'light-blue': '#9CEAEF',
        'sky-blue': '#018abe',
        'blue': '#68D8D6',
        'dark-blue': '#3DCCC7',
        
      },

    },
  },
  plugins: [],
}

