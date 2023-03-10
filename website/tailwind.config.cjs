/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2f444b",
        secondary: "#283a40",
      },

      keyframes: {
        pan: {
          "0%": {
            transform: "translateX(-100px) scale(1.25)",
          },
          "100%": {
            transform: "translateX(100px) scale(1.25)",
          },
        },
        float: {
          "0%": {
            transform: "translateY(0) translateX(0)",
          },
          "25%": {
            transform: "translateY(-50%) translateX(50%)",
          },
          "75%": {
            transform: "translateY(-100%) translateX(-50%)",
          },
          "100%": {
            transform: "translateY(-200%) translateX(0)",
          },
        },
      },
      animation: {
        pan: "pan 50s linear 0s infinite alternate",
        float: "float 10s linear 0s infinite",
      },
      fontFamily: {
        catamaran: ['"Work Sans"', "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
      },

      backgroundImage: {
        wave: "url('./assets/wave.jpg')",
      },
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
