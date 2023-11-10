/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        new: "0px 4px 4px 0px #00000040",
      },
      colors: {
        primary: "#008080",
        secondary: "#CCE6E6",
      },
      screens: {
        "2xl": "1536px",
        "3xl": "1920px",
      },

      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "540px",
          md: "720px",
          lg: "960px",
          xl: "1140px",
          "2xl": "1320px",
          "3xl": "1580px",
        },
      },
      borderRadius: {
        4: "4px",
      },
    },
  },
  plugins: [],
};
