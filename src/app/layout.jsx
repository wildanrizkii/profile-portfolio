import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";
import { NextThemeProvider } from "@/components/ThemeProvider";
import { AestheticProvider } from "@/context/AestheticContext";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "wildanrizkii",
  description: "Portfolio",
  icons: "/images/logo-web.png",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  const theme = localStorage.getItem('theme');
                  const root = document.documentElement;

                  if (theme === 'dark') {
                    root.classList.add('dark');
                  } else {
                    root.classList.remove('dark');
                  }
                  
                  // Also apply initial aesthetic
                  const aesthetic = localStorage.getItem('aesthetic') || 'broadsheet';
                  root.classList.remove('aesthetic-hallmark', 'aesthetic-original', 'aesthetic-broadsheet');
                  root.classList.add('aesthetic-' + aesthetic);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${plusJakartaSans.variable} antialiased`} suppressHydrationWarning>
        <AestheticProvider>
          <CustomCursor />
          <NextThemeProvider>
            <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
          </NextThemeProvider>
        </AestheticProvider>
      </body>
    </html>
  );
}
