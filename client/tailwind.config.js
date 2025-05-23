/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
      colors: {
        'space-cadet': '#1F2647',
        'snow': '#FFFBFC',
      }
    },
  },
  plugins: [],
}
