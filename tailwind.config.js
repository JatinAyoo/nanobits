// tailwind.config.js

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'xxl': '1400px',
      },
      container: {
        center: true,
        // padding: '1rem',
        screens: {
          sm: '540px',
          md: '720px',
          lg: '960px',
          xl: '1140px',
          xxl: '1320px',
        }
      },
      colors: {
        emphasis: 'rgba(var(--bs-emphasis-color-rgb), .65)',
        'emphasis-hover': 'rgba(var(--bs-emphasis-color-rgb), .8)',
        'emphasis-disabled': 'rgba(var(--bs-emphasis-color-rgb), .3)',
        'emphasis-active': 'rgba(var(--bs-emphasis-color-rgb), 1)',
        warning: {
          DEFAULT: 'rgba(var(--bs-warning-rgb), 1)',
          'bg-opacity': 'rgba(var(--bs-warning-rgb), var(--bs-bg-opacity, 1))',
        },
        primary: '#0d6efd',
        borderbottom : 'rgba(255, 255, 255, .2)',
        cardborder : 'rgba(0, 0, 0, 0.175)',
        cardborderdark : 'rgba(0, 0, 0, 0.375)',
        bgradial : 'radial-gradient(50% 50% at 50% 50%, #373737 0%, #131313 100%)',
        muted : 'rgba(33, 37, 41, .75)',
        muted1 : 'rgba(33, 37, 41)',
        customblue : 'rgb(13, 110, 253)',
        blackbg : '#131313',
        footerbg : '#1E1E1E',
      },
      fontFamily: {
        sans: [
          '"Space Grotesk"',
          'system-ui',
          '-apple-system',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          '"Noto Sans"',
          '"Liberation Sans"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      backgroundImage: {
        'custom-radial': 'radial-gradient(50% 50% at 50% 50%, #373737 0%, #131313 100%)',
        'custom-radial2' : 'radial-gradient(50% 50% at 50% 50%, #262626 0%, #191919 100%)',
      },
      boxShadow: {
        'cardshadow' : '0 .5rem 1rem rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
};
