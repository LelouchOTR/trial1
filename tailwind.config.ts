import type { Config } from 'tailwindcss'

import { ColorScale, nextui } from "@nextui-org/react";

const primary: ColorScale = {
  900: "#9b1c1c",
  800: "#771d1d",
  700: "#7a9f39",
  600: "#e02424",
  500: "#f05252",
  400: "#f98080",
  300: "#f8b4b4",
  200: "#fbd5d5",
  100: "#fde8e8",
  50: "#fdf2f2",
};

const config: Config = {
  content: [
    "./app/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "3xl": "4rem", // 60px
        "2xl": "2.4rem", // 36px
        xl: "1.9rem", // 28px
        lg: "1.3rem", // 20px
        md: "1rem", // 15px
        sm: "0.9rem", // 14px
        xs: "0.8rem", // 12px
      },
      borderRadius: {
        md: "0.5rem",
      },
      lineHeight: {
        tight: "1.1",
      },
      dropShadow: {
        text: ["0 0px 3px rgba(0, 0, 0, 0.5)", "0 0px 20px rgba(0, 0, 0, 0.2)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              ...primary,
              DEFAULT: primary[700],
              foreground: "#ffffff",
            },
            focus: primary[700],
          },
          layout: {
            borderWidth: {
              small: "1px",
              medium: "1px",
              large: "2px",
            },
            radius: {
              medium: "0.5rem",
            },
          },
        },
      },
    }),
  ],
};

export default config;
