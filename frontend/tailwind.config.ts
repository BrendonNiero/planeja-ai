import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      colors: {
        "white" : "#fff",
        "cloud" : "#c3c2cd",
        "vivid" : "#543ef6",
        "foggy" : "#7c808b",
        "coal" : "#1a1d24",
        "graphite" : "#25242c",
        "deep-space" : "#02061d",
        "obsidian" : "#3a1f96",
        "dark-obsidian" : "#01061a"
      },
  },
  plugins: [],
};
export default config;
