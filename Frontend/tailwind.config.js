/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb', // Blue-600
          dark: '#1d4ed8',    // Blue-700
          light: '#3b82f6'    // Blue-500
        },
        secondary: {
          DEFAULT: '#4f46e5', // Indigo-600
          dark: '#4338ca',    // Indigo-700
          light: '#6366f1'    // Indigo-500
        },
        accent: {
          DEFAULT: '#ec4899', // Pink-500
          dark: '#db2777',    // Pink-600
          light: '#f472b6'    // Pink-400
        }
      }
    },
  },
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    themes: ["light"],
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
};