/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      sans: ["IBM Plex Sans", "sans-serif"],
    },
    colors: {
      text: {
        primary: "#242424",
        disabled: "#c5c5c5",
      },
      primary: {
        main: "#b993d6",
      },
      secondary: {
        main: "#8ca6db",
      },
      green: {
        lightest: "#d4f7d8",
        light: "#7ee789",
        main: "#31d842",
        dark: "#188123",
        darkest: "#105617",
      },
      grey: {
        "50": "#f1f1f4",
        "100": "#e3e3e8",
        "200": "#c6c7d2",
        "300": "#aaabbb",
        "400": "#8d8fa5",
        "500": "#63657d",
        "600": "#5a5c72",
        "700": "#444555",
        "800": "#2d2e39",
        "900": "#17171c",
        "950": "#0b0c0e",
      },
    },
    extend: {
      minHeight: {
        "100vh": "100vh",
      },
    },
  },
  variants: {
    fill: ['hover', 'focus'],
  },
  plugins: [],
};
