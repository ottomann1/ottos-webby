import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Use 'class' strategy for dark mode
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
        "light-gradient": "linear-gradient(to bottom, #ffffff, #cccccc)",
        "dark-gradient": "linear-gradient(to bottom, #000000, #555555)",
      },
      colors: {
        primary: "#F5A524",
        secondary: "#7828C8",
        foreground: "#11181C",
        background: {
          light: "light-gradient",
          dark: "dark-gradient",
        },
        content: {
          light: "light-gradient", // Light mode content background
          dark: "#dark-gradient", // Dark mode content background
        },
        text: {
          light: "#11181C", // Light mode text color
          dark: "#ECEDEE", // Dark mode text color
        },
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
              foreground: "#ffffff",
              DEFAULT: "#F5A524",
            },
            secondary: {
              foreground: "#ffffff",
              DEFAULT: "#7828C8",
            },
          },
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            background: "#000000", // Fallback for non-gradient support
            foreground: "#ECEDEE",
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
