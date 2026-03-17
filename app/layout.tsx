import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import CookieBanner from "@/components/CookieBanner";
import { LocaleProvider } from "@/components/LocaleContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "B4N - Be4Name | Swiss Premium Leather Goods",
  description: "Premium Swiss quality leather goods and accessories. Wallets, belts, bags, and footwear with worldwide delivery. Crafted in Switzerland.",
  keywords: "swiss leather goods, premium wallets, leather belts, swiss accessories, be4name, b4n, swiss quality, premium bags, leather products",
  authors: [{ name: "B4N Team" }],
  openGraph: {
    title: "B4N - Be4Name | Swiss Premium Leather Goods",
    description: "Premium Swiss quality leather goods and accessories with worldwide delivery. Crafted in Switzerland.",
    url: "https://be4name.ch",
    siteName: "B4N - Be4Name",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://be4name.ch/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "B4N - Swiss Premium Leather Goods",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "B4N - Be4Name | Swiss Premium Leather Goods",
    description: "Premium Swiss quality leather goods and accessories with worldwide delivery.",
    images: ["https://be4name.ch/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        <LocaleProvider>
          <Navigation />
          {children}
          <footer className="bg-slate-900 text-white py-12 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-bold mb-4">B4N</h3>
                  <p className="text-sm text-gray-400">
                    Premium Swiss quality products
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Information</h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                    <li><a href="/shipping" className="text-gray-400 hover:text-white transition-colors">Shipping & Payment</a></li>
                    <li><a href="/returns" className="text-gray-400 hover:text-white transition-colors">Returns</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Business</h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href="/b2b" className="text-gray-400 hover:text-white transition-colors">B2B Partnership</a></li>
                    <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Contact</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>info@be4name.ch</li>
                    <li>+41 12 345 67 89</li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-800 pt-8 text-center">
                <p className="text-sm text-gray-400">
                  © 2024-2026 B4N - Be4Name. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
          <CookieBanner />
        </LocaleProvider>
      </body>
    </html>
  );
}
