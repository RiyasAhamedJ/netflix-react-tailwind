module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {boxShadow: {
      'orange-right': '4px 0 6px -1px rgba(255, 99, 71, 0.4)', // Rightward shadow
        'orange-bottom': '0 4px 6px -1px rgba(255, 99, 71, 0.4)',
    },},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

