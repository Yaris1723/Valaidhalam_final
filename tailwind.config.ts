import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-bricolage)", "sans-serif"],
        jakarta: ["var(--font-jakarta)", "sans-serif"],
      },
      colors: {
        blue: {
          deep: "#030f26",
          mid: "#0c1f4a",
          bright: "#1d4ed8",
          light: "#3b82f6",
          glow: "#60a5fa",
          pale: "#bfdbfe",
          ultra: "#eff6ff",
        },
      },
      animation: {
        "float-slow": "floatSlow 8s ease-in-out infinite",
        "float-medium": "floatMedium 6s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        marquee: "marquee 22s linear infinite",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(2deg)" },
        },
        floatMedium: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(59,130,246,0.4), 0 8px 30px rgba(0,0,0,0.25)" },
          "50%": { boxShadow: "0 0 0 20px rgba(59,130,246,0), 0 8px 30px rgba(0,0,0,0.25)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
