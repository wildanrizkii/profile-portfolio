import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Tambahkan sesuai kebutuhan
});

export const metadata = {
  title: "wildanrizkii",
  description: "Portfolio",
  icons: "/images/logo-web.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} antialiased`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
