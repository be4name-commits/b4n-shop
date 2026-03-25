'use client';

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/lib/store';
import LanguageSelector from './LanguageSelector';
import { Locale, locales, useTranslation } from '@/lib/i18n';

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const itemCount = useCartStore((state) => state.items.length);
  const { t, locale: currentLocale } = useTranslation();

  const handleLocaleChange = (newLocale: Locale) => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.replace(newPath);
  };

  const navLinks = [
    { href: `/${currentLocale}`, label: t('home') },
    { href: `/${currentLocale}/products`, label: t('products') },
    { href: `/${currentLocale}/b2b`, label: t('b2b') },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href={`/${currentLocale}`} className="text-2xl font-bold text-black">
          B4N
        </Link>
        
        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-gray-700 hover:text-black transition-colors ${
                pathname === link.href ? 'text-black font-semibold' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
          
          <LanguageSelector
            currentLocale={currentLocale}
            onLocaleChange={handleLocaleChange}
          />
          
          <Link
            href={`/${currentLocale}/cart`}
            className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ShoppingCart className="w-6 h-6" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
