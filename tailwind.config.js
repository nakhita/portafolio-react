/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["opacity-0", "opacity-100", "translate-y-0", "translate-y-10"],
  theme: {
    extend: {
      fontFamily: {
        fredericka: ['"Fredericka the Great"', "cursive"],
        lexend: ['"Lexend"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
