import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('/background.jpg')",
        heroNameGradient:
          "linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.733) 75%, rgb(0, 0, 0) 100%)",
      },
      fontFamily: {
        reaver: ["var(--font-Reaver)", "sans-serif"],
      },
      keyframes: {
        showHeroName: {
          "0%": { opacity: "0", bottom: "-20px" },
          "100%": { opacity: "1", bottom: "0px" },
        },
      },
      animation: {
        showHeroName: "showHeroName .3s ease-in both",
      },
    },
  },
  plugins: [],
};
export default config;
