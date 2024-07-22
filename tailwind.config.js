/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        nit:{
          100: '#03ff9a',
          200: '#1d1a22',
          300: '#29262f'
        }
      },
    },
  },
  plugins: [],
}