import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#03001C",
        primary: "#413ECB",
      },
      boxShadow: {
        custom: "15px 15px rgba(0, 0, 0, 0.40)",
        custom2: "5px 5px rgba(0, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
