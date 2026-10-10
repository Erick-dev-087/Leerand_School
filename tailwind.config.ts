import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FAF9F5",
          deep: "#F8F7F2",
        },
        navy: {
          DEFAULT: "#071A4A",
          soft: "#0C2560",
        },
        royal: {
          DEFAULT: "#123B8C",
          light: "#1E4FB0",
        },
        gold: {
          DEFAULT: "#F6C400",
        },
        orange: {
          DEFAULT: "#F58220",
        },
        brandred: {
          DEFAULT: "#D7261E",
        },
      },
      fontFamily: {
        serif: ["var(--font-lora)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        organic: "42% 58% 56% 44% / 48% 42% 58% 52%",
      },
      maxWidth: {
        content: "1200px",
        wide: "1360px",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
