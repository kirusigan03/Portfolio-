/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Plus Jakarta Sans'", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        accent: {
          DEFAULT: "#6d5bf6",
          dark: "#5844e0",
        },
      },
      boxShadow: {
        soft: "0 20px 45px -20px rgba(30, 20, 90, 0.18)",
      },
    },
  },
  plugins: [],
};
