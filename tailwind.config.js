/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./src/pages/**/*.{js,jsx,ts,tsx}`, `./src/components/**/*.{js,jsx,ts,tsx}`],
  theme: {
    extend: {
      colors: {
        background: "#22222d",
        screen: "#2a2a36",
        highlight: "#e74043",
        tint: "#ebaa39",
        hover: "#d19530",
        icon: "#9BA1A6",
        text: "#ECEDEE",
        subText: "#9BA1A6",
        cardBackground: "#3A3A4A",
      },
    },
  },
  plugins: [],
};
