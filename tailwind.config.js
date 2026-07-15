/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxera: {
          charcoal: '#121212',
          navy: '#0A1428',
          gold: '#D4AF37',
          goldLight: '#F0D060',
          goldDark: '#B8942E',
          ivory: '#F5F5F5',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
