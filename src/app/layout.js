import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Iyanuoluwa Oke — Robotics & AI Engineer",
  description: "Robotics, Computer Vision, and AI portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <Nav />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
