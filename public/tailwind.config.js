const { Height } = require("@mui/icons-material");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        facebookGray:'#f0f2f5',
        grayLight:'#888',
        middleDarkGray:'#f0f2f5',
      },
      height:{
         '17':'60px',
          '41':'170px',
         'page':'calc(100vh - 60px)',
      },
      width:{
        '17':'60px'
     },
    },
  },
  plugins: [require('tailwind-scrollbar'),],
}
