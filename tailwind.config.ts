import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        neu: "5px 5px 7px #1c1d1f, -5px -5px 7px #222527",
        'neu-hover': "5px 5px 7px #1c1d1f, -5px -5px 7px #222527",
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        roboto: ['Roboto Slab', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
