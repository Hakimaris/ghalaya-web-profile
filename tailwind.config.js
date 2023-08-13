/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#780000",
          secondary: "#C1121F",
          accent: "#669BBC",
          neutral: "#FDF0D5",
          "base-100": "#f3f4f6",
          info: "#003049",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
       
      },
    ],
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
