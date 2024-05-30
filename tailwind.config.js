/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      colors: {
        primary: "#3D52A0",
        secondary: "#7091E6",
        tertiary: "#8697C4",
        quaternary: '#ADBBDA',
        quinary: '#EDE8F5',
        navy:"#1d1836"
      },
      borderColor:{
        primary:"#3D52A0",
        secondary: "#7091E6",
        tertiary: "#8697C4",
        quaternary: '#ADBBDA',
        quinary: '#EDE8F5',
      },
      fontFamily: {
        bubble: ['"Baloo 2"', 'cursive'],
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
    },
  },
  variants: {},
  plugins: [],
};
