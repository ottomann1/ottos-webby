import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const config: Config = {
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
        // Tailwind's gradient utilities
        "light-gradient": "linear-gradient(to bottom, #ffffff, #cccccc)",
        "dark-gradient": "linear-gradient(to bottom, #000000, #555555)",
      },
    },
  },
  plugins: [
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: true, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            background: "#ffffff", // Fallback for non-gradient support
            foreground: "#11181C",
            primary: {
              foreground: "#FFFFFF",
              DEFAULT: "#F5A524",
            },
          }, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            background: "#000000", // Fallback for non-gradient support
            foreground: "#11181C",
            primary: {
              foreground: "#FFFFFF",
              DEFAULT: "#F5A524",
            },
          }, // dark theme colors
        },
      },
    }),
  ],
};
export default config;
