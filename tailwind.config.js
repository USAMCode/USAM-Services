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
    fontFamily:{
      main:['Quicksand'],
    },  
    extend: {
      screens:{
        "xs":{"max": "500px"},
        "sm":{"min":"501px", "max":"767px"}
      },
        colors: {
          primary: "#6F4C5B",
          secondary: "#9E7777",
          tertiary: "#DEBA9D",
          quaternary: "#F5E8C7",
          quinary: "#F6F3EA",
          navy:"#1d1836",
          first:"#5479f7",
          second:"#99b9ff",
          third:"#caddff"
        },
      borderColor:{
        primary: "#6F4C5B",
        secondary: "#9E7777",
        tertiary: "#DEBA9D",
        quaternary: "#F5E8C7",
        quinary: "#FFF2D7",
        navy:"#1d1836",
        first:"#5479f7",
        second:"#99b9ff",
        third:"#caddff"
        },
      textColor: {
        primary: "#6F4C5B",
        secondary: "#9E7777",
        tertiary: "#DEBA9D",
        quaternary: "#F5E8C7",
        quinary: "#FFF2D7",
        navy:"#1d1836",
        first:"#5479f7",
        second:"#99b9ff",
        third:"#caddff"
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
