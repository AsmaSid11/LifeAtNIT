/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1F2647',     // Space Cadet - navy blue
        lightblue: '#88DADA', // Tiffany Blue - light blue
        teal: '#0D9488',      // Dark Cyan - teal
        yellow: '#DDA853',    // Earth Yellow - mustard
        snow: '#FFFBFC',  // Snow - white
      },
    },
  },
  plugins: [],
};
