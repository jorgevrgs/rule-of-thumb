/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          positive: 'rgb(60, 187, 180)',
        },
        yellow: {
          negative: 'rgb(249, 173, 29)',
        },
        'dark-background': 'rgba(0, 0, 0, 0.4)',
        'darker-background': 'rgba(0, 0, 0, 0.6)',
        'darker-gray': 'rgba(51, 51, 51, 1)',
        'dark-gray': 'rgba(70, 70, 70, 1)',
        'light-gray': 'rgba(235, 235, 235, 1)',
        'light-background': 'rgba(255, 255, 255, 0.4)',
        'lighter-background': 'rgba(255, 255, 255, 0.8)',
      },
    },
  },
  plugins: [],
};
