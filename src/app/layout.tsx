import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Arunima Agrawal - Full Stack Developer",
  description: "Portfolio of Arunima Agrawal, a passionate full-stack developer specializing in modern web technologies.",
  keywords: ["portfolio", "developer", "full-stack", "react", "nextjs", "typescript"],
  authors: [{ name: "Arunima Agrawal" }],
  openGraph: {
    title: "Arunima Agrawal - Full Stack Developer",
    description: "Portfolio of Arunima Agrawal, a passionate full-stack developer specializing in modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
