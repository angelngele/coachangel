import type { Config } from "tailwindcss";
import aspectRatio from "@tailwindcss/aspect-ratio";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#000000",
        secondary: "#B7E4C7",
        secondaryGreen: "#95D5B2",
        secondaryGreen2: "#6FD08C",
        darkGreen: "#40916C"
      },
      animation: {
        moveRight: 'moveRight 15s linear infinite',
        moveLeft: 'moveLeft 15s linear infinite',
      },
      keyframes: {
        moveRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        moveLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [aspectRatio],
} 
export default config;
