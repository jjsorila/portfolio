/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      sans: ["Montserrat"],
    },
    extend: {},
  },
  plugins: [],
  important: true
};
