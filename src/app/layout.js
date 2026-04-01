import "./globals.css";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Iyanuoluwa Oke — Robotics & AI Engineer",
  description: "Independent Robotics & AI Systems Engineer specialising in autonomous systems, computer vision, and AI-driven robotics. Building intelligent machines that perceive, decide, and act.",
  keywords: ["Robotics", "AI", "Computer Vision", "ROS2", "Deep Learning", "Python"],
  openGraph: {
    title: "Iyanuoluwa Oke — Robotics & AI Engineer",
    description: "Independent Robotics & AI Systems Engineer",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="antialiased">
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
