/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white-bg': '#eef0f4',
      'tan-bg': '#f2e4bd',
      'primary-red': '#ac485a',
      'brown': '#432000',
      'dark-tan': '#efe6cc',
      'tan': '#fffdf8',
      'input-grey': '#dce1eb',
      'black': '#0f0f0f',
      'light': '#edebe4'
    },

    extend: {},
  },
  plugins: [],
}