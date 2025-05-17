/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: 'true',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    spacing: {
      1: '8px',
      2: '12px',
      3: '16px',
      4: '24px',
      5: '32px',
      6: '48px',
    },
    extend: {
      colors: {
        greeny: '#32a852',
      },
      fontSize: {
        // xs: '12px',
        // sm: '14px',
        // base: '18px',
      },
      width: {
        6: '100px',
        3: '48px',
      },
      height: {
        6: '100px',
        3: '48px',
      },
    },
  },
  plugins: [],
};
