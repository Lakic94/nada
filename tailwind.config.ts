import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        sm: "0.750rem",
        base: "1rem",
        xl: "1.333rem",
        "2xl": "1.777rem",
        "3xl": "2.369rem",
        "4xl": "3.158rem",
        "5xl": "4.210rem",
      },
      fontFamily: {
        heading: "Cinzel",
        body: "Cinzel",
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
    },
    colors: {
      text: "#080202",
      background: "#ffffff",
      primary: "#694016",
      secondary: "#efdcdc",
      accent: "#b14e4e",
    },
  },
  plugins: [],
} satisfies Config;
