/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#958D8D",
        secondary: "#958D8D", // color text
        tertiary: "#F5F5DC",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },

      screens:{
        'sm': '640px',
         'md': '768px',
         'lg':'1024px',

      }
    
    },
  },
  plugins: [ 
    
  ],
};