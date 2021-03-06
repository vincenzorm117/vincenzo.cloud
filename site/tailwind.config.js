module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Roboto', 'Helvetica', 'sans-serif'],
      serif: ['serif'],
      display: ["'Gilroy Light'", 'Helvetica', 'sans-serif']
    },
    colors: {
      currentColor: 'currentColor',
      transparent: 'transparent',
      white: {
        default: '#fff',
        dark: '#eee',
        darker: '#e3e3e3',
        b2: '#b2b2b2',
        ce: '#cecece'
      },
      black: {
        default: '#000',
        chrome: '#686b6d'
      },
      green: {
        grey: '#5d805e'
      },
      gray: {
        darkest: '#1c1c1c',
        dark: '#474747',
        light: '#f0f0f0',
        a3: '#a3a3a3',
        e2: '#e2e2e2'
      },
      purple: {
        dark: '#242634',
        darkest: '#1d1e29'
      },
      brown: {
        darkest: '#93928d'
      },
      gold: {
        dark: '#b6995e'
      },
      cyan: {
        default: '#00ceff',
        dark: '#06aed5'
      },
      red: {
        pink: '#eb606b'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
