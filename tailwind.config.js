/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.html"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
      },
    },
  },
  plugins: [],
};
