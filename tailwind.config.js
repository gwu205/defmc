const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        serif: ["Merriweather", ...defaultTheme.fontFamily.serif],
        sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#7E4184",
        secondary: "#5E3163",
      },
    },
  },
  variants: {},
  plugins: [],
}
