import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        warmspice: {
          light: '#fef3c7',
          DEFAULT: '#f59e0b',
          dark: '#d97706',
        },
      },
      boxShadow: {
        'sky': '0 10px 30px -5px rgba(14, 165, 233, 0.2)',
        'soft': '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
        'card': '0 10px 25px -5px rgba(2, 132, 199, 0.08), 0 8px 10px -6px rgba(2, 132, 199, 0.04)',
      },
    },
  },
  plugins: [],
};
export default config;
