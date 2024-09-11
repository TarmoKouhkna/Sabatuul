module.exports = {
  content: [
    '/Users/tarmokouhkna/Documents/Programming/Sabatuule_test/index.html',  // Path to index.html
    '/Users/tarmokouhkna/Documents/Programming/Sabatuule_test/about.html',  // Path to about.html
  ],
  theme: {
    extend: {
      // Adding custom fonts
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },

      // Adding custom colors
      colors: {
        customTeal: '#0d9488',   // Your navbar background color
        customWhite: '#E9EFEC',  // Your navbar text color
        customGray: '#707070',   // Custom gray if you want to adjust the gray text
      },

      // Adding custom font sizes (optional)
      fontSize: {
        '4.5xl': '2.5rem',       // Custom text size between 4xl and 5xl, if needed
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.25)',
        },
        '.text-shadow-md': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
        },
        '.text-shadow-lg': {
          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.3)',
        },
        '.text-shadow-xl': {
          textShadow: '4px 4px 8px rgba(0, 0, 0, 0.35)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}
