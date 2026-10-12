import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { ivory: "#F5F3EE", graphite: "#252724", olive: "#7B8065", stone: "#E6E3DB", muted: "#777970", surface: "#EFEEE8" }, fontFamily: { sans: ["var(--font-dm-sans)"], display: ["var(--font-manrope)"] } } },
  plugins: []
};
export default config;