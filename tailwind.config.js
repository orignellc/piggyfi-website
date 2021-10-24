module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "black-hero": "rgba(137, 19, 192, 0.01)",
        purple: "#8913C0",
        "purple-hero": "rgba(137, 19, 192, 0.3)",
        "purple-deep": "#1D1A27",
      },
      fontFamily: {
        body: [
          "Rubik",
          "system-ui",
          "-apple-system" /* Firefox supports this but not yet `system-ui` */,
          "'Segoe UI'",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
          "'Apple Color Emoji'",
          "'Segoe UI Emoji'",
        ],
      },
      inset: {
        "9/20": "45%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
