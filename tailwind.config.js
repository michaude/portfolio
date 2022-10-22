module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        beige: '#FCFFFC',
        black: '#000',
        gray: '#5D707F',
        green: {
          darkGreen: '#000F08',
          lightGreen: '#B7D5D4'
        },
        yellow: '#FFB800',
        white: '#fff',
      },
      fontFamily: {

      },
      extend: {
        spacing: {
          '8': '0.5rem',
          '12': '0.75rem',
          '16': '1rem',
          '20': '1.25rem',
          '24': '1.5rem'
        },
        borderRadius: {

        }
      }
    },
  },
  plugins: [],
}
