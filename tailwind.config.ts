import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  // Remove darkMode configuration if not using it
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|navbar|toggle|ripple|spinner).js",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "whitey-gradient": "linear-gradient(to bottom, #ffffff, #cccccc)",
        "custom-gradient":
          "linear-gradient(to bottom, #F5A524, #7828C8, #86a8e7, #ffe4e1)",
      },
      colors: {
        primary: "#F5A524",
        secondary: "#7828C8",
        foreground: "#11181C",
        background: "#ffffff", // Set a base background color if needed
        content: "#191817", // Content background color
        text: "#F0F4FA", // Text color
      },
      animation: {
        shimmer: "shimmer 3s infinite",
        slowPulse: "slowPulse 5s infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { opacity: "100%" },
          "50%": { opacity: "80%" },
          "100%": { opacity: "100%" },
        },
        slowPulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "100%" },
          "50%": { transform: "scale(1.05)", opacity: "95%" },
        },
      },
    },
  },
  plugins: [
    nextui({
      prefix: "nextui",
      addCommonColors: true,
      defaultTheme: "light",
      defaultExtendTheme: "light",
      layout: {},
      themes: {
        light: {
          layout: {},
          colors: {
            background: "#ffffff",
            foreground: "#1C1B1A",
            primary: {
              foreground: "#ffffff",
              DEFAULT: "#F5A524",
            },
            secondary: {
              foreground: "#ffffff",
              DEFAULT: "#7828C8",
            },
          },
        },
      },
    }),
  ],
};

export default config;
