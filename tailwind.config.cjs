/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      spacing: {
        '5.5': '1.375rem',
        '34': '8.5rem',
        '86': '22rem',
        '92': '23rem',
        '110': '26rem',
        '120': '28rem',
        '130': '30rem',
        '140': '32rem',
        '150': '34rem',
        '160': '36rem',
        '170': '38rem',
        '180': '40rem',
        '190': '42rem',
        '200': '44rem',
        '210': '46rem',
      },
      colors: {
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      screens: {
        '2xs': '400px',
        xs: '570px'
      }
    },
  },
  plugins: [],
}