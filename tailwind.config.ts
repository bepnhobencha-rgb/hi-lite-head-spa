import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hl: {
          black: "#0D0D0D",
          dark: "#1A1710",
          gold: "#C9A55A",
          "gold-light": "#E8C97A",
          cream: "#F7F2E8",
          "cream-dark": "#EDE5D0",
          muted: "#6B6456",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #C9A55A 0%, #E8C97A 50%, #C9A55A 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
