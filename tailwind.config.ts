import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "5px",
        lg: "0px",
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1200px",
      },
    },
    screens: {
      xs: "200px",
      sm: "375px",
      md: "768px",
      lg: "1200px",
      xl: "1280px",
      "2xl": "1536px"
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "spin-cw-3s": "spin 12s linear infinite",
        "spin-ccw-6s": "spin 15s linear infinite reverse",
        "spin-ccw-9s": "spin 28s linear infinite",
      }
    },
  },
  plugins: [],
};
export default config;
