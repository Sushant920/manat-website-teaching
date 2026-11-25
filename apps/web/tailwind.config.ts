import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#905CB5",
          deep: "#6B3D91",
          soft: "#B07DCC",
          mist: "#F4ECFA",
          pale: "#FAF6FD",
        },
        surface: {
          DEFAULT: "#FCFAFE",
          muted: "#F5F0FA",
          bright: "#FFFFFF",
        },
        ink: {
          DEFAULT: "#1A1520",
          soft: "#3D3648",
          muted: "#6B6475",
          light: "#9A93A3",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 12px 36px -18px rgba(107, 61, 145, 0.35)",
        soft: "0 4px 20px -8px rgba(26, 21, 32, 0.12)",
      },
    },
  },
  plugins: [],
} satisfies Config;
