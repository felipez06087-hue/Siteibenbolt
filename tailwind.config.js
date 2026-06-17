/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      colors: {
        brandBlack: '#000000',
        brandWhite: '#FFFFFF',
        brandYellow: '#F5C000',
        brandGrayDark: '#121212',
        brandGrayLight: '#F5F5F5',
        brandBorder: '#262626',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-slow': 'marquee 40s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
