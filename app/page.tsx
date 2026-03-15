'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useLocale } from '@/components/LocaleContext';
import { getTranslation } from '@/lib/i18n';

// Товары для первой карусели (ремни и обувь)
const carousel1Items = [
  { sku: '21030030033', name: "Women's Belt Black" },
  { sku: '21330030033', name: "Women's Belt Brown" },
  { sku: '310011261', name: "Unisex Belt Blue" },
  { sku: '410011200', name: "Unisex Belt Black" },
  { sku: 'LOAFER-3170-BK', name: "Women's Loafers Black" },
  { sku: 'LOAFER-ASTRA-BK', name: "Women's Loafers Astra" },
];

// Товары для второй карусели (кошельки и косметички)
const carousel2Items = [
  { sku: '305610', name: 'Card Case' },
  { sku: '505610', name: 'Compact Wallet' },
  { sku: '516410', name: 'Bi-Fold Wallet' },
  { sku: '520610', name: 'Long Wallet' },
  { sku: '805610', name: 'Cosmetic Bag Black' },
  { sku: '805660', name: 'Cosmetic Bag Red' },
];

function ProductCarousel({ items }: { items: typeof carousel1Items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [items.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className="relative w-full h-full overflow-hidden group">
      {/* Carousel Images */}
      {items.map((item, index) => (
        <Link
          key={item.sku}
          href={`/products/${item.sku}`}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={`/images/products/${item.sku}.png`}
            alt={item.name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            priority={index === 0}
          />
        </Link>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={(e) => {
          e.preventDefault();
          goToPrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center"
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          goToNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center"
        aria-label="Next"
      >
        ›
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.preventDefault();
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-white w-6'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const { locale } = useLocale();
  const t = (key: keyof typeof import('@/lib/i18n').translations.en) => getTranslation(locale, key);

  return (
    <main className="min-h-screen bg-white">
      {/* 2x2 Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 h-screen">
        {/* Block 1: Top Left - Carousel 1 (Belts & Footwear) */}
        <div className="relative h-[50vh] md:h-full bg-gray-100">
          <ProductCarousel items={carousel1Items} />
        </div>

        {/* Block 2: Top Right - Text Block with CTA */}
        <div className="relative h-[50vh] md:h-full bg-white flex items-center justify-center p-8 md:p-12 border-b md:border-b-0 md:border-l border-gray-200">
          <div className="text-center max-w-md">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              {t('heroTitle')}
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              {t('heroSubtitle')}
            </p>
            <Link
              href="/products"
              className="inline-block bg-black hover:bg-white hover:text-black border-2 border-black text-white px-8 py-4 text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              {t('heroButton')}
            </Link>
          </div>
        </div>

        {/* Block 3: Bottom Left - B2B Text Block (Black Background) */}
        <div className="relative h-[50vh] md:h-full bg-black flex items-center justify-center p-8 md:p-12 border-t border-gray-800">
          <div className="text-center max-w-md">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {t('b2bTitle')}
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              {t('b2bSubtitle')}
            </p>
            <a
              href="/b2b-presentation.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white hover:bg-black hover:text-white border-2 border-white text-black px-8 py-4 text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              {t('b2bButton')}
            </a>
          </div>
        </div>

        {/* Block 4: Bottom Right - Carousel 2 (Wallets & Cosmetic Bags) */}
        <div className="relative h-[50vh] md:h-full bg-gray-100 border-t md:border-l border-gray-200">
          <ProductCarousel items={carousel2Items} />
        </div>
      </div>
    </main>
  );
}
