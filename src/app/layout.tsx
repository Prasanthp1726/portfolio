import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prasanth | Full Stack Developer",
  description: "Portfolio of Prasanth – a passionate Full Stack Developer building modern web experiences.",
  keywords: ["Prasanth", "portfolio", "developer", "full stack", "React", "Next.js"],
  openGraph: {
    title: "Prasanth | Full Stack Developer",
    description: "Passionate Full Stack Developer – building modern web experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
