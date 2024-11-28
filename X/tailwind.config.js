// tailwind.config.js
module.exports = {
  content: [
    './index.html', 
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4559EB',
        secondary: '#84DCFF',
        yellow: '#FDBB42',
        orange: '#EC5039',
        gray: '#4E4E4E',
        lightGray: '#dbdce6',
        borderColor: '#4559EB',
      },
      maxWidth: {
        DEFAULT: '1120px', 
      },
      backgroundImage: {
        'hero-pattern': "url('./images/bg.jpg')",
      },
      fontFamily: {
        inter: ['"Inter", sans-serif'],
      },
    },
  },
  plugins: [], // Add Tailwind CSS plugins here if needed
};
