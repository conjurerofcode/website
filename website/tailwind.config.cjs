/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        catamaran: ['"Work Sans"', "sans-serif"],
      },
      backgroundImage: {
        wave: "url('./assets/wave.jpg')",
      },
      transform: [{ tuck: "translateZ(-1px)" }],
      boxShadow: {
        "inner-large": "0px 2px 299px 118px rgba(0,0,0,0.53) inset",
        "inner-bottom": " 0px -150px 79px -198px rgba(0,0,0,0.75) inset",
        none: "none",
      },
    },
  },
  plugins: [],
};
