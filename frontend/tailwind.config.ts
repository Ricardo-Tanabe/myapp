import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'xs': '460px',
        'xs-2': '520px',
        "sm-2": "680px",
        "sm-3": "760px",
        "md-1": "820px",
        "md-2": "870px",
        "md-3": "920px",
      }
    },
  },
  plugins: [],
} satisfies Config;
