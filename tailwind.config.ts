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
        primary: "#413ECB",
      },
      boxShadow: {
        custom: "5px 10px 20px rgba(0, 0, 0, 0.40)",
      },
    },
  },
  plugins: [],
};
export default config;
