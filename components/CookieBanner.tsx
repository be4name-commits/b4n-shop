'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 text-white p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm">
            Мы используем cookies для улучшения работы сайта. 
            Продолжая использовать сайт, вы соглашаетесь с использованием cookies.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={declineCookies}
            className="px-4 py-2 text-sm border border-white rounded hover:bg-white hover:text-slate-900 transition-colors"
          >
            Отклонить
          </button>
          <button
            onClick={acceptCookies}
            className="px-4 py-2 text-sm bg-black rounded hover:bg-gray-800 transition-colors"
          >
            Принять
          </button>
        </div>
      </div>
    </div>
  );
}
