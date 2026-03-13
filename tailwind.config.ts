import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        warm: {
          50: "#FAF8F5",
          100: "#F5F0EA",
          200: "#E8E0D4",
          300: "#D4C8B8",
          400: "#B8A898",
          500: "#9C8E7C",
          600: "#7A6C5C",
          700: "#5C4F40",
          800: "#3D3428",
          900: "#1A1613",
          950: "#0F0D0A",
        },
        clay: {
          50: "#FBF5EF",
          100: "#F5E8D8",
          200: "#E8CDB0",
          300: "#D4AD84",
          400: "#B8926A",
          500: "#9C7A56",
          600: "#826548",
          700: "#6B5139",
          800: "#4A3828",
          900: "#3D3025",
        },
      },
      fontFamily: {
        sans: ["var(--font-lora)", "Georgia", "serif"],
        heading: ["var(--font-caveat)", "cursive"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
