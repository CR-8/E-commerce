/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3b82f6', // Blue-500
          dark: '#1d4ed8',    // Blue-700
          light: '#60a5fa'    // Blue-400
        },
        secondary: {
          DEFAULT: '#6366f1', // Indigo-500
          dark: '#4338ca',    // Indigo-700
          light: '#818cf8'    // Indigo-400
        },
        accent: {
          DEFAULT: '#f472b6', // Pink-400
          dark: '#db2777',    // Pink-600
          light: '#f9a8d4'    // Pink-300
        },
        background: {
          light: '#ffffff',
          dark: '#111827',    // Gray-900
        },
        surface: {
          light: '#f3f4f6',   // Gray-100
          dark: '#1f2937',    // Gray-800
        },
        text: {
          light: '#111827',   // Gray-900
          dark: '#f9fafb',    // Gray-50
        }
      },
      backgroundColor: {
        dark: '#111827',      // Dark mode background
        light: '#ffffff'      // Light mode background
      }
    },
  },
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    themes: ["light", "dark"],
    darkTheme: "dark",
  }
}