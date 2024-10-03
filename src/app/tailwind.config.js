/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors : {
        'primary-1': '#E3FDFD',
        'secondary-1': '#CBF1F5',
        'primary-2': '#A6E3E9',
        'secondary-2': '#87A2FF'
      },
      textColor: {
        'primary-1': '#433878'
      },
      height: {
        'sm': '25rem',
        'md': '40rem',
        'lg': '80rem',
      }
    },
  },
  plugins: [],
}

