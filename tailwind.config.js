/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#D80032",
          secondary: "#EF233C",
          accent: "#AA867E",
          neutral: "#EDF2F4",
          "base-100": "#ffffff",
          info: "#2B2D42",
          success: "#36d399",
          warning: "#EF233C",
          error: "#f87272",
        },
        theme: {
          screens: {
            xs: { min: "0px", max: "639px" },
            sm: { min: "640px", max: "767px" },
            md: { min: "768px", max: "1023px" },
            lg: { min: "1024px", max: "1279px" },
            xl: { min: "1280px", max: "1535px" }
          },
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
