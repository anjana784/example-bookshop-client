import type { Config } from "tailwindcss";

const config: Config = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      themePrimaryBlue: "#50688F",
      themeText: "#333333",
      themePrimaryButton: "#1AAB8A",
      themeSecondaryButton: "#FF5722",
      themePrimaryButtonHover: "#005489",
      themeSecondaryButtonHover: "#E64A19",
      themeLink: "#4285F4",
      themeLinkHover: "#0A4189",
      themeBackgroundLight: "#F5F5F5",
      themeBackgroundDark: "#E0E0E0",
      themeError: "#FF4444",
      themeSuccess: "#4CAF50",
      themeWarning: "#FFC107",
      white: "#FFFFFF",
      black: "#000000",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
