/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["node_modules/daisyui/dist/**/*.js", "node_modules/react-daisyui/dist/**/*.js", "./src/**/*.{html,js}"],
  theme: {
    extend: {}
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: ["night"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: ""
  }
}
