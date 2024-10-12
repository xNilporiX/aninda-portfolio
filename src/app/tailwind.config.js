const cssnanoPlugin = require('cssnano');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors : {
        'primary-1': '#E3FDFD',
        'secondary-1': '#CBF1F5',
        'primary-2': '#A6E3E9',
        'secondary-2': '#87A2FF',
        'primary-3': '#433878',
        'secondary-3': '#A594F9',
        custom: {
          'light-pale': '#F5F7F8',
          'light-gray': '#d3d3d3',
          'snow': '#FFFAFA',
        }
      },
      textColor: {
        'primary-1': '#433878',
        'secondary-1': '#A594F9'
      },
      height: {
        'sm': '25rem',
        'md': '40rem',
        'lg': '80rem',
      },
      borderColor: {
        'primary-1': '#E3FDFD',
        'secondary-1': '#CBF1F5',
        'primary-2': '#A6E3E9',
        'secondary-2': '#87A2FF',
        'primary-3': '#433878',
        'secondary-3': '#A594F9'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('flowbite/plugin'),
    require('autoprefixer'),
    require('@fullhuman/postcss-purgecss'),
  ],
}

