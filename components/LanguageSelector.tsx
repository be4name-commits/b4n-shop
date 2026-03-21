'use client';

import { useState } from 'react';
import { Locale, locales } from '@/lib/i18n';

interface LanguageSelectorProps {
  currentLocale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

export default function LanguageSelector({ currentLocale, onLocaleChange }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const languageNames: Record<Locale, string> = {
    en: 'English',
    de: 'Deutsch',
    fr: 'Français',
    it: 'Italiano',
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <span className="text-2xl">{currentLocale === 'en' ? '🇬🇧' : currentLocale === 'de' ? '🇩🇪' : currentLocale === 'fr' ? '🇫🇷' : '🇮🇹'}</span>
        <span className="text-sm font-medium">{currentLocale.toUpperCase()}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => {
                onLocaleChange(locale);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors flex items-center gap-3 ${
                currentLocale === locale ? 'bg-gray-100 text-black' : ''
              }`}
            >
              <span className="text-xl">
                {locale === 'en' ? '🇬🇧' : locale === 'de' ? '🇩🇪' : locale === 'fr' ? '🇫🇷' : '🇮🇹'}
              </span>
              <span className="text-sm font-medium">{languageNames[locale]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
