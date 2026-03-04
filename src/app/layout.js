import "./globals.css";
import Nav from "@/components/Nav";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${inter.variable} antialiased`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}