import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "B4N - Be4Name | Swiss Premium Products",
  description: "Premium Swiss quality products with worldwide delivery. Wallets, bags, belts, and more.",
  keywords: "swiss products, premium quality, wallets, leather goods, be4name",
  authors: [{ name: "B4N Team" }],
  openGraph: {
    title: "B4N - Be4Name | Swiss Premium Products",
    description: "Premium Swiss quality products with worldwide delivery",
    url: "https://be4name.ch",
    siteName: "B4N - Be4Name",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://be4name.ch" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className={inter.className}>
        <Navigation />
        {children}
        <footer className="bg-slate-900 text-white py-8 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-sm text-gray-400">
              © 2024-2026 B4N - Be4Name. All rights reserved.
            </p>
          </div>
        </footer>
        <CookieBanner />
      </body>
    </html>
  );
}
