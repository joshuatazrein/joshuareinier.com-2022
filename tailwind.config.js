// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // For the best performance and to avoid false positives,
    // be as specific as possible with your content configuration.
  ],
  theme: {
    fontFamily: {
      sans: ["Red Hat Display", "sans-serif"],
      serif: ["EB Garamond", "serif"],
    },
    extend: {
      height: {
        header: "60px",
      },
      padding: {
        header: "60px",
      },
      colors: {
        semiblack: {
          50: "#0000000D",
          100: "#0000001A",
          200: "#00000033",
          300: "#0000004D",
          400: "#00000066",
          500: "#00000080",
          600: "#00000099",
          700: "#000000B3",
          800: "#000000CC",
          900: "#000000E6",
        },
      },
    },
  },
};
