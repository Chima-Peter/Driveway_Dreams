// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '400px',
      'md': '680px',
      'tablet': '850px',
      'lg': '1024px',
    },
    extend: {
      fontFamily: {
        "main": ['Nunito']
      },
      backgroundImage: {
        'review': "url('/src/assets/images/reviews.webp)"
      }
    }
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none', // For Internet Explorer and Edge
          'scrollbar-width': 'none',   // For Firefox
          '&::-webkit-scrollbar': {
            display: 'none',           // For Chrome, Safari, and Opera
          },
        }
      });
    },
  ],
}
