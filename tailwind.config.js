/** @type {import('tailwindcss').Config} */
const flowbite = require('flowbite-react/tailwind');
module.exports = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      screens:{
        xs:{"max": "450px"},
        'sm': {'min': '640px', 'max': '767px'},
        // => @media (min-width: 640px and max-width: 767px) { ... }

        'md': {'min': '768px', 'max': '1023px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        'lg': {'min': '1024px', 'max': '1279px'},
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        'xl': {'min': '1280px', 'max': '1535px'},
        // => @media (min-width: 1280px and max-width: 1535px) { ... }

        '2xl': {'min': '1536px'},
        // => @media (min-width: 1536px) { ... }
      },
        colors: {
          primary: "#6F4C5B",
          secondary: "#9E7777",
          tertiary: "#DEBA9D",
          quaternary: "#F5E8C7",
          quinary: "#FFF2D7",
          navy:"#1d1836"
        },
      borderColor:{
        primary: "#6F4C5B",
        secondary: "#9E7777",
        tertiary: "#DEBA9D",
        quaternary: "#F5E8C7",
        quinary: "#FFF2D7",
        navy:"#1d1836"
        },
      textColor: {
        primary: "#6F4C5B",
        secondary: "#9E7777",
        tertiary: "#DEBA9D",
        quaternary: "#F5E8C7",
        quinary: "#FFF2D7",
        navy:"#1d1836"
        },
      fontFamily: {
        bubble: ['"Baloo 2"', "cursive"],
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      spacing: {
        75: "302px", // 302px for the card image width
        55: "222px", // 222px for the card image height
      },
      transitionDuration: {
        500: "500ms", // 500ms transition duration
      },
    },
  },
  variants: {},
  plugins: [],
};
