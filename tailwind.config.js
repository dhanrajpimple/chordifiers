/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {

    extend: {
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
        commissioner: ['Commissioner', 'sans-serif'],
        inder: ['Inder', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
