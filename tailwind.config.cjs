/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      'main': '#16ABF8',
      white: '#FFFFFF',
      gray: '#E5E5E5',
      'gray-text': '#888888',
      modal: '#000',
      delete: '#ED4C5C',
      cancel: '#F4F4F4'
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    },
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
