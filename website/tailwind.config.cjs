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
    },
  },
  plugins: [],
};
