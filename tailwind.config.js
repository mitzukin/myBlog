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
          swhite:"#e9ecef",
          Card:"#faf9f9",
          textlight: "#ff6d00"
      },
      fontFamily: {
        Roboto: ['Roboto', 'ui-sans-serif', 'system-ui'],
      },
      width: {
        '150': '150rem', 
      },
    },
  },
  plugins: [],
}

