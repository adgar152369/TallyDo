/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white-bg': '#eef0f4',
      'tan-bg': '#fcf6e6',
      'tan': '#F7F3D3',
      'dark-tan': '#efe6cc',
      'brown': '#8F7957',
      'primary-red': '#D86666',
      'primary-red-700': '#ba5252',
      'primary-blue': "#66A8D8",
      'primary-blue-700': "#508eba",
      'input-grey': '#D9D9D9',
      'black': '#0f0f0f',
      'header-black': '#5B5959',
      'light': '#edebe4',
      'white': '#fff'
    },

    fontSize: {
      'fs-12': '12px',
      'fs-14': '14px',
      'fs-16': '16px',
      'fs-18': '18px',
      'fs-20': '20px',
      'fs-24': '24px',
    },

    boxShadow: {
      'item-shadow': '0px 1px 4px rgba(0, 0, 0, 0.25)'
    },

    borderRadius: {
      'br-5': '5px'
    },

    extend: {},
  },
  plugins: [],
}