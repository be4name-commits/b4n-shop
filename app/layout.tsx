import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "B4N - Be4Name | Швейцарские премиум товары",
  description: "Премиальные товары швейцарского качества с доставкой",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Navigation />
        {children}
        <footer className="bg-slate-900 text-white py-8 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-sm text-gray-400">
              © 2024 B4N - Be4Name. Все права защищены.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
