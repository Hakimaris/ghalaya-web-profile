/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#780000",
          secondary: "#EF233C",
          accent: "#8D99AE",
          neutral: "#EDF2F4",
          "base-100": "#f3f4f6",
          "base-200": "#f3f4f6",
          info: "#2B2D42",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
        theme: {
          screens: {
            xs: { min: "0px", max: "639px" },
            sm: { min: "640px", max: "767px" },
            // => @media (min-width: 640px and max-width: 767px) { ... }
            md: { min: "768px", max: "1023px" },
            // => @media (min-width: 768px and max-width: 1023px) { ... }
            lg: { min: "1024px", max: "1279px" },
            // => @media (min-width: 1024px and max-width: 1279px) { ... }
            xl: { min: "1280px", max: "1535px" },
            // => @media (min-width: 1280px and max-width: 1535px) { ... }
            "2xl": { min: "1536px" },
            // => @media (min-width: 1536px) { ... }
          },
        },
      },
    ],
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"),],
};
