/** @type {import('tailwindcss').Config} */
module.exports = {
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
        dark: '#1F2647',     // Space Cadet - navy blue
        lightblue: '#88DADA', // Tiffany Blue - light blue
        teal: '#0D9488',      // Dark Cyan - teal
        yellow: '#DDA853',    // Earth Yellow - mustard
        snow: '#FFFBFC',  // Snow - white
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s cubic-bezier(.39,.575,.565,1) both',
        'gradient-x': 'gradientX 2s linear infinite',
        'fade-in': 'fadeIn 0.7s ease-in both',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
