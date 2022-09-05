/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './packages/frontend/**/*.{js,ts,jsx,tsx}',
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
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
