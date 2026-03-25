/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{vue,js,ts,jsx,tsx}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
        colors: {
        primary: "#000462",
        orange: "#ff6b1e",
        secondary: "#FF6600",
        light: "#FDFDFD",
        dark: "#404053",
        ash: "#F8F8FF",
        paleblue: "#EEF5FF",
      },
    },
  },
  plugins: [],
};
