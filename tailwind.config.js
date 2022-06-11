module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobileM: { max: "767.98px" },
      largeScreens: { min: "768px" },
    },
    extend: {
      colors: {
        mainColor: "#379da8",
        mainColor1: "#4327a8",
        bgColor: "#F3F3F3"
      },
    },
  },
  plugins: [],
};
