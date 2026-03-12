'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loadStripe } from '@stripe/stripe-js';
import { useCartStore } from '@/lib/store';
import { CreditCard, Lock } from 'lucide-react';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getTotal } = useCartStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    if (items.length === 0) {
      router.push('/cart');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Ошибка при создании сессии оплаты');
      }

      const stripe = await stripePromise;
      
      if (!stripe) {
        throw new Error('Stripe не загружен');
      }

      // Redirect to Stripe Checkout
      const { error: stripeError } = await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      });

      if (stripeError) {
        throw stripeError;
      }
    } catch (err: any) {
      console.error('Checkout error:', err);
      setError(err.message || 'Произошла ошибка при оформлении заказа');
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Корзина пуста</h1>
          <button
            onClick={() => router.push('/products')}
            className="text-purple-600 hover:underline"
          >
            Вернуться к каталогу
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Оформление заказа</h1>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-6">Ваш заказ</h2>
          
          <div className="space-y-4 mb-6">
            {items.map((item) => (
              <div key={item.product.id} className="flex justify-between items-center py-3 border-b">
                <div>
                  <div className="font-semibold">{item.product.name}</div>
                  <div className="text-sm text-gray-600">Количество: {item.quantity}</div>
                </div>
                <div className="font-bold">
                  {(item.product.price * item.quantity).toFixed(2)} CHF
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center text-2xl font-bold border-t pt-4">
            <span>Итого:</span>
            <span className="text-purple-600">{getTotal().toFixed(2)} CHF</span>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center gap-3 mb-6 text-gray-600">
            <Lock className="w-5 h-5" />
            <span className="text-sm">Безопасная оплата через Stripe</span>
          </div>

          <button
            onClick={handleCheckout}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-lg text-lg font-semibold transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            <CreditCard className="w-6 h-6" />
            {loading ? 'Загрузка...' : 'Перейти к оплате'}
          </button>

          <p className="text-sm text-gray-500 text-center mt-4">
            Вы будете перенаправлены на безопасную страницу оплаты Stripe
          </p>
        </div>
      </div>
    </div>
  );
}
