import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        slate: "#475569",
        mist: "#f8fafc",
        line: "#dbe4ee",
        accent: "#0f766e",
        accentDark: "#115e59",
      },
      boxShadow: {
        panel: "0 18px 40px -24px rgba(15, 23, 42, 0.22)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      maxWidth: {
        content: "72rem",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};

export default config;
