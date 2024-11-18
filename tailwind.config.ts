import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

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
        heroFilterGradient:
          "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3))",
        toolTipHeroGradient: "linear-gradient(150deg, #253137, #12181C)",
      },
      fontFamily: {
        reaver: ["var(--font-Reaver)", "sans-serif"],
        radiance: ["var(--font-Radiance)", "Noto Sans", "sans-serif"],
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
  plugins: [
    function ({ addUtilities }: { addUtilities: PluginAPI["addUtilities"] }) {
      const newUtilities = {
        ".mask-gradient": {
          maskImage: " linear-gradient(to top, transparent 10%, black 50%)",
        },
        ".clip-bottom-arrow": {
          clipPath: `polygon(
                    0px 0px,
                    0px calc(100% - 20px),
                    calc(50% - 20px) calc(100% - 20px),
                    50% 100%,
                    calc(50% + 20px) calc(100% - 20px),
                    100% calc(100% - 20px),
                    100% 0px)`,
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
export default config;
