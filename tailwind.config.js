/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('./src/assets/header-bg.svg')",
        "second-section-bg": "url('./src/assets/second-section-bg.svg')",
        "world-bg": "url('./src/assets/world.svg')",
      },
    },
  },
  plugins: [],
};
