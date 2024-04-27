/** @type {import(tailwindcss).Config} */
module.exports = {
  content: ["**/*{html, js}"],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('/docs/svg/background.svg')",
        card: "url('/docs/images/background.jpg')",
      },
    },
  },
  plugins: [],
};
