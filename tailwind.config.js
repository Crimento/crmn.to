/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#34A964",
          "primary-content": "#FFFFFF",
          secondary: "#ff8900",
          accent: "#ffffff",
          "accent-content": "#000000",
          neutral: "#000000",
          "base-100": "#2A303c",
          info: "#242933",
          "info-content": "#FFFFFF",
          success: "#84cc16",
          warning: "#facc15",
          error: "#ef4444",
          "error-content": "#ffffff",
        },
      },
    ],
  },
};
