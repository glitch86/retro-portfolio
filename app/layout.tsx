import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/buttons/ScrollToTop";

export const metadata: Metadata = {
  title: "Roza // Software Engineer",
  description:
    "Full-stack developer who builds aesthetic digital experiences. Open to freelance opportunities.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Navbar />
        {children}
        <ScrollToTop></ScrollToTop>
      </body>
    </html>
  );
}
