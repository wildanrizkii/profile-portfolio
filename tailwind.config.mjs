/** @type {import('tailwindcss').Config} */
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
        "dark-gray": "var(--foreground)",
        zinc: {
          900: "var(--foreground)",
        },
        gray: {
          500: "var(--muted-foreground)",
          600: "var(--muted-foreground)",
        },
        neutral: {
          500: "var(--muted-foreground)",
          600: "var(--muted-foreground)",
        },
      },
      screens: {
        sm: "360px", // Mobile
        md: "768px", // Tablet
        lg: "1024px", // Desktop
      },
      spacing: {
        64: "64px", // Gutter width
        32: "32px", // Row margin
      },
      container: {
        center: true, // Memastikan konten di tengah
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        display: ["var(--font-display)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
