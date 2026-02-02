/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", "ui-sans-serif", "system-ui"],
        "dm-sans": ["var(--font-dm-sans)", "ui-sans-serif", "system-ui"],
      },
      colors: {
        "bg-dark": "#050505",
        blue: {
          400: "#3B8BFF",
          500: "#0065F8",
          600: "#0050C8",
          700: "#003DA0",
          800: "#002A78",
          900: "#001850",
        },
      },
      maxWidth: {
        container: "1280px",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        "gradient-shift": "gradient-shift 3s ease infinite",
        "glow-pulse": "glow-pulse 4s ease-in-out infinite",
        "marquee-testimonials": "marquee-testimonials var(--duration) linear infinite",
      },
      keyframes: {
        "marquee-testimonials": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 101, 248, 0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 101, 248, 0.6)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};
