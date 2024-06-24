import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        "131": ".8fr 4fr 1.5fr",
      },
      colors: {
        khaki: {
          50: "#FCF5EF",
          100: "#F5E1CE",
          200: "#F0D2B7",
          300: "#E9BD96",
          400: "#E5B181",
          500: "#DE9D62",
          600: "#CA8F59",
          700: "#9E6F46",
        },
        grey: {
          50: "#F5F5F5",
          75: "#DDDDDD",
          100: "#B5B5B5",
          200: "#919191",
          300: "#5F5F5F",
          400: "#404040",
          500: "#101010",
          600: "#000000",
        },
        reject: "#D6001C",
        "white-400": "#FAFAFA",
        "white-600": "#E8E8E8",
        "white-700": "#F3F3F3",
        red: {
          50: "#FFE8E8",
          100: "#FFB7B7",
          200: "#FF9494",
          300: "#FF6363",
          400: "#FF4545",
          500: "#FF1616",
          600: "#E81414",
        },
      },
      fontFamily: {
        quick: ["var(--font-quicksand)"],
        sora: ["var(--font-sora)"],
        lex: ["var(--font-lexend)"],
      },
      boxShadow: {
        lightest: "0 2px 30px 0 rgba(0, 0, 0, 0.06)",
        light: "2px 4px 60px 0px rgba(0, 0, 0, 0.07)",
        client: "2px 2px 40px 0 rgba(0, 0, 0, 0.05)",
        footer: "0 -4px 40px rgba(0, 0, 0, 0.05)",
        rating: "2px 4px 50px 0px #0000000D",
        aboutus: "2px 2px 40px 0px #0000000D",
      },
    },
  },
  plugins: [],
};
export default config;
