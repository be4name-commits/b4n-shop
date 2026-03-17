'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/lib/store';
import { getTranslation } from '@/lib/i18n';
import LanguageSelector from './LanguageSelector';
import { useLocale } from './LocaleContext';

export default function Navigation() {
  const pathname = usePathname();
  const itemCount = useCartStore((state) => state.items.length);
  const { locale, setLocale } = useLocale();
  const t = (key: Parameters<typeof getTranslation>[1]) => getTranslation(locale, key);

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/products', label: t('products') },
    { href: '/b2b', label: t('b2b') },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-purple-600">
          B4N
        </Link>
        
        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-gray-700 hover:text-purple-600 transition-colors ${
                pathname === link.href ? 'text-purple-600 font-semibold' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
          
          <LanguageSelector
            currentLocale={locale}
            onLocaleChange={setLocale}
          />
          
          <Link
            href="/cart"
            className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ShoppingCart className="w-6 h-6" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
