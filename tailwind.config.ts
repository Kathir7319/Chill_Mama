import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // User's specified palette
        charcoal: '#171717',     // Main background
        darkgrey: '#242424',     // Cards and sections
        chilli: {                // Primary CTA buttons
          DEFAULT: '#E94B20',
          hover: '#FF8A24',
        },
        ember: '#FF8A24',        // Hover states / highlights
        cream: '#FFF2DC',        // Main headings
        softgrey: '#D0CBC3',     // Body text
        herb: '#3D6B45',         // Fresh accent
        // Utility border color for dark cards
        borderdark: '#333333',
      },
      boxShadow: {
        'glow-chilli': '0 8px 30px -4px rgba(233, 75, 32, 0.35)',
        'glow-ember': '0 8px 30px -4px rgba(255, 138, 36, 0.35)',
        'card-dark': '0 10px 30px -5px rgba(0, 0, 0, 0.45)',
      },
    },
  },
  plugins: [],
};
export default config;
