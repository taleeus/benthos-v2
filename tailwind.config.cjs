/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/views/**/*.vue", "./src/components/**/*.vue"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        darkGreen: "#2c2f1c",
        grey: "#797768",
        lightGrey: "#bebebe",
        darkBrown: "#8e6942",
        cream: "#e5cb98",
        lightBrown: "#b9a17d",
        brown: "#af7955",
        pink: "#eabd9c",
        egg: "#ebe8d7",
        white: "#f0efeb",
        black: "#151515",
        red: "#6d2d36",
      },
      backgroundImage: {
        "debris-bside-gradient":
          'linear-gradient(to bottom, rgba(240, 239, 235, 0.3), rgb(21, 21, 21)), url("/assets/backgrounds/large/debris-bside.large.avif");',
        dissonance:
          "linear-gradient(to top, rgba(240, 239, 235, 0), rgb(21, 21, 21)), url(/assets/backgrounds/large/dissonance-bg.large.avif)",
        grain: "url(/assets/backgrounds/large/grain-bg.large.avif);",
        tour: "url(/assets/backgrounds/large/tour-bg.large.avif);",
        ii: "url(/assets/backgrounds/large/cover-art-bg.large.avif);",
        debris: "url(/assets/backgrounds/large/debris-bg.large.avif);",
        dragonfly: "url(/assets/backgrounds/large/dragonfly.large.avif);",
      },
      transitionDuration: {
        400: "400ms",
      },

      screens: {
        mobile: "320px",
        // => @media (min-width: 320px) { ... }

        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
