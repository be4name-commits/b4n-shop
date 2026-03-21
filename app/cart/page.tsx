'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/lib/store';

export default function CartPage() {
  const router = useRouter();
  const { items, updateQuantity, removeItem, getTotal } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4">Корзина пуста</h1>
          <p className="text-gray-600 mb-8">
            Добавьте товары из каталога в корзину
          </p>
          <button
            onClick={() => router.push('/products')}
            className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Перейти в каталог
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Корзина</h1>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          {items.map((item) => (
            <div
              key={item.product.id}
              className="flex gap-6 py-6 border-b last:border-b-0"
            >
              <div className="relative w-32 h-32 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                {item.product.images[0] ? (
                  <Image
                    src={item.product.images[0]}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-4xl">
                    📦
                  </div>
                )}
              </div>

              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2">
                  {item.product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {item.product.description}
                </p>
                <div className="text-lg font-bold text-black">
                  {item.product.price.toFixed(2)} {item.product.currency}
                </div>
              </div>

              <div className="flex flex-col items-end justify-between">
                <button
                  onClick={() => removeItem(item.product.id)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-semibold">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-xl font-bold">
                  {(item.product.price * item.quantity).toFixed(2)} CHF
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <span className="text-2xl font-bold">Итого:</span>
            <span className="text-3xl font-bold text-black">
              {getTotal().toFixed(2)} CHF
            </span>
          </div>

          <button
            onClick={() => router.push('/checkout')}
            className="w-full bg-black hover:bg-gray-800 text-white py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Перейти к оплате
          </button>
        </div>
      </div>
    </div>
  );
}
