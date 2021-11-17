module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          light: '#85d7ff',
          DEFAULT: '#1fb6ff',
          dark: '#009eeb',
        },
        pink: {
          light: '#ff7ce5',
          DEFAULT: '#ff49db',
          dark: '#ff16d1',
        },
        gray: {
          darkest: '#221E2F',
          dark: '##9a9bb6',
          DEFAULT: '#c0ccda',
          light: '#e0e6ed',
          lightest: '#f9fafc',
        },
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
        wiggle: 'wiggle 2s ease-in-out infinite',
       },
       keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-14deg)' },
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '50%': { transform: 'rotate(-4deg)' },
          '60%': { transform: 'rotate(10deg)' },
          '70%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        }
       }
    },
  },
  variants: {
    extend: {
      divideColor: ['group-hover'],
    },
  },
  plugins: [],
};
