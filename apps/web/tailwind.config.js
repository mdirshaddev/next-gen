/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  important: '#__next',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('prettier-plugin-tailwindcss')],
};
