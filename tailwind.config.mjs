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
    },
  },
  plugins: [],
};
