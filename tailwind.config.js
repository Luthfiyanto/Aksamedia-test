/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff6363",
        baseblue: {
          100: "#04B2D9",
          200: "#049DD9",
          300: "#0477BF",
        },
        darkblue: "#011526",
        dark: "#0D0D0D",
        light: "#F5F5F5",
        lightblue: "#E5F0FF",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
