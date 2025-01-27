/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#493628", // Dark brown
        secondary: "#AB886D", // Warm beige
        background: "#D6C0B3", // Light cream
        last: "#E4E0E1", // Soft gray
      },
      colors: {
        primary: "#493628", // Dark brown
        secondary: "#AB886D", // Warm beige
        background: "#D6C0B3", // Light cream
        last: "#E4E0E1", // Soft gray
      },
    },
  },
  plugins: [],
};
