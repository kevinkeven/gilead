/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],

  theme: {
    extend: {
      colors: {
        "gilead-primary": "#e48e45",
        "gilead-secondary": "#4b5e5b",
      },
      boxShadow: {
        "gilead-header":
          "inset 0px 10px 20px -10px black, inset 0px -50px 20px -10px black;  ",
      },
      fontFamily: {
        yellowtail: ["Yellowtail", "cursive"],
        kaushan: ["Kaushan Script", "cursive"],
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
