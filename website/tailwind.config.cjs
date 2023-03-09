/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        pan: {
          "0%": {
            transform: "translateX(-100px) scale(1.25)",
          },
          "100%": {
            transform: "translateX(100px) scale(1.25)",
          },
        },
      },
      animation: {
        pan: "pan 50s linear 0s infinite alternate",
      },
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
      borderRadius: {
        offset1: "border-radius: 20% 0% 20% 0% / 20% 0% 20% 0%",
      },
    },
  },
  plugins: [],
};
