module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Roboto", "Helvetica", "sans-serif"],
      serif: ["serif"],
      display: ["'Gilroy Light'", "Helvetica", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      white: {
        default: "#fff",
        dark: "#eee",
        darker: "#e3e3e3",
        b2: "#b2b2b2",
        ce: "#cecece",
      },
      black: {
        default: "#000",
      },
      green: {
        grey: "#5d805e",
      },
      gray: {
        darkest: "#1c1c1c",
      },
      purple: {
        dark: "#242634",
        darkest: "#1d1e29",
      },
      brown: {
        darkest: "#93928d",
      },
      cyan: {
        default: "#00ceff",
      },
      red: {
        pink: "#eb606b",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
