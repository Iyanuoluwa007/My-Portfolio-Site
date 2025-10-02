/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0A0A0A",
        light: "#EDEDED",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      boxShadow: {
        glow: "0 0 30px rgba(192, 132, 252, 0.6)",      // default glow
        glowLg: "0 0 50px rgba(192, 132, 252, 0.9)",   // stronger hover glow
      },
      backgroundImage: {
        "radial-fade": "radial-gradient(circle at center, rgba(139,92,246,0.3), transparent 70%)",
      },
    },
  },
  plugins: [],
};
