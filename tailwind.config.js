/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    
    extend: {
      colors: {
        'themeRed': '#ff0303'
      },
      fontSize: {
        'fluid' : 'clamp(1.5rem, 5vw, 3rem)',
        'fluid2' : 'clamp(1rem, 3vw, 2rem)',
        'fluid3' : 'clamp(2rem, 10vw + 1rem, 7rem)',
      },
    },
  },
  plugins: [],
}

