import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "elisius.dk — AI-drevet forretningsoverblik",
  description:
    "Få fuldt overblik over din forretning med AI. Saml dine vigtigste data, automatisér processer og træf bedre beslutninger – hurtigere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-white text-gray-900 font-sans">
        {children}
      </body>
    </html>
  );
}
