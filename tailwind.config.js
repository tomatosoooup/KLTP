/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      ct: ["Campton", "sans-serif"],
      tt: ["TT Interfaces", "sans-serif"],
      cf: ["Integral CF", "sans-serif"],
    },
  },
  plugins: [],
};
