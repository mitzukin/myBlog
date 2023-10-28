/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors : {
          Background: "#3c6e71",
          primary: "#0a0908",
          secondary: "#403d39",
          paragraph: "#495057",
          pwhite:"#f8f9fa",
          swhite:"#6c757d",
          Card:"#faf9f9",
          textlight: "#ff6d00",
          backArticle: "#00171f"

      },
      fontFamily: {
        Roboto: ['Roboto', 'ui-sans-serif', 'system-ui'],
      },
      width: {
        '150': '150rem', 
      },
      fontSize: {
        'xxs': '0.5rem', // You can adjust the size as needed
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        
        

      },

    },
  },
  plugins: [],
}

