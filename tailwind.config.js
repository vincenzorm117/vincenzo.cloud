module.exports = {
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
      white: {
        default: "#fff",
        dark: "#eee",
        darker: "#e3e3e3",
      },
      gray: {
        darkest: "#1c1c1c",
      },
      purple: {
        darkest: "#1d1e29",
      },
      brown: {
        darkest: "#93928d",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
