/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        "bg-dark": "#030304",
      },
    },
  },
  plugins: [],
};

