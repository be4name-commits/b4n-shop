'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/lib/store';
import { useLocale } from '@/components/LocaleContext';
import { getTranslation } from '@/lib/i18n';

export default function CartPage() {
  const router = useRouter();
  const { items, updateQuantity, removeItem, getTotal } = useCartStore();
  const { locale } = useLocale();
  const t = (key: Parameters<typeof getTranslation>[1]) => getTranslation(locale, key);

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-8 shadow-premium">
            <ShoppingBag className="w-16 h-16 text-purple-600" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">{t('cartEmpty')}</h1>
          <p className="text-gray-600 mb-10 text-lg leading-relaxed">
            {locale === 'de' ? 'Fügen Sie Produkte aus dem Katalog zu Ihrem Warenkorb hinzu' :
             locale === 'fr' ? 'Ajoutez des produits du catalogue à votre panier' :
             locale === 'it' ? 'Aggiungi prodotti dal catalogo al tuo carrello' :
             'Add products from the catalog to your cart'}
          </p>
          <button
            onClick={() => router.push('/products')}
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-10 py-5 rounded-xl font-semibold transition-all shadow-premium-lg hover:shadow-premium-xl transform hover:scale-105"
          >
            {t('continueShopping')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 text-gray-900 tracking-tight">{t('cart')}</h1>

        <div className="bg-white rounded-2xl shadow-premium-lg p-8 mb-8 border border-gray-100">
          {items.map((item) => (
            <div
              key={item.product.id}
              className="flex flex-col sm:flex-row gap-6 py-8 border-b last:border-b-0 border-gray-100"
            >
              <div className="relative w-full sm:w-40 h-40 bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl overflow-hidden flex-shrink-0 shadow-md hover:shadow-premium transition-shadow">
                {item.product.images[0] ? (
                  <Image
                    src={item.product.images[0]}
                    alt={item.product.name}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-5xl">
                    📦
                  </div>
                )}
              </div>

              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 leading-tight">
                  {item.product.name}
                </h3>
                <p className="text-gray-600 text-base mb-4 leading-relaxed">
                  {item.product.description}
                </p>
                <div className="text-xl font-bold text-purple-600">
                  {item.product.price.toFixed(2)} {item.product.currency}
                </div>
              </div>

              <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-between gap-4">
                <button
                  onClick={() => removeItem(item.product.id)}
                  className="text-red-500 hover:text-red-700 transition-colors p-2 hover:bg-red-50 rounded-lg"
                  aria-label={t('remove')}
                >
                  <Trash2 className="w-6 h-6" />
                </button>

                <div className="flex items-center gap-4 bg-gray-50 rounded-xl p-2">
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    className="w-10 h-10 flex items-center justify-center bg-white hover:bg-purple-50 rounded-lg transition-colors shadow-sm hover:shadow-md"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-5 h-5 text-gray-700" />
                  </button>
                  <span className="w-14 text-center font-bold text-lg text-gray-900">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center bg-white hover:bg-purple-50 rounded-lg transition-colors shadow-sm hover:shadow-md"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-5 h-5 text-gray-700" />
                  </button>
                </div>

                <div className="text-2xl font-bold text-gray-900">
                  {(item.product.price * item.quantity).toFixed(2)} CHF
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-premium-lg p-8 border-2 border-gray-100">
          <div className="flex justify-between items-center mb-8 pb-6 border-b-2 border-gray-200">
            <span className="text-3xl font-bold text-gray-900">{t('cartTotal')}:</span>
            <span className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
              {getTotal().toFixed(2)} CHF
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => router.push('/products')}
              className="flex-1 bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-300 py-5 rounded-xl text-lg font-semibold transition-all shadow-md hover:shadow-premium"
            >
              {t('continueShopping')}
            </button>
            <button
              onClick={() => router.push('/checkout')}
              className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-5 rounded-xl text-lg font-semibold transition-all shadow-premium-lg hover:shadow-premium-xl transform hover:scale-105"
            >
              {t('proceedToCheckout')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
