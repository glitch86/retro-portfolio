import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Layba — Portfolio",
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
      </body>
    </html>
  );
}
