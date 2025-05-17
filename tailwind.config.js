// tailwind.config.js
module.exports = {
  darkMode: 'class', // Ensure this is 'class', not 'media'
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
