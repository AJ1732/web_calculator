/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'maroon': '#800000',
        'dark-brown': '#1F0318',
        'light-brown': '#8C705F',
        'white-brown': '#F3E1DD',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      height: {
        'calc': 'calc(100vh - 8rem)'
      }

    },
  },
  plugins: [],
}

