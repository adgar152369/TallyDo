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
      'dark-brown': '#5e4f39',
      'primary-red': '#D86666',
      'primary-red-700': '#ba5252',
      'primary-blue': "#66A8D8",
      'primary-blue-700': "#508eba",
      'secondary-blue': '#508eba',
      'secondary-red': '#ba5252',
      'input-grey': '#D9D9D9',
      'secondary-input-grey': '#c4c4c4',
      'black': '#0f0f0f',
      'header-black': '#5B5959',
      'light': '#edebe4',
      'white': '#fff',
      'exit': '#FACE7A',
      'exit-white': '#fff',
      'purple': '#d1b3e3',
      'darker-purple': '#9f87ad'
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
      'item-shadow': '0px 1px 4px rgba(0, 0, 0, 0.25)',
      'ten-oclock': '-2px 1px 5px grey'
    },

    borderRadius: {
      'circle': '50%',
      'br-6': '6px',
    },

    screens: {
      'custom-sm': '480px',
      'custom-md': '768px',
      'custom-lg': '1024px',
      'custom-xl': '1440px'
    },

    extend: {
    },
  },
  plugins: [],
}