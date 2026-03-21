'use client';

import { useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { CheckCircle } from 'lucide-react';
import { useCartStore } from '@/lib/store';

function SuccessContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    if (sessionId) {
      // Clear cart after successful payment
      clearCart();
    }
  }, [sessionId, clearCart]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <CheckCircle className="w-24 h-24 text-green-500 mx-auto" />
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Спасибо за заказ!</h1>
        
        <p className="text-gray-600 mb-6">
          Ваш платёж успешно обработан. Мы отправили подтверждение на вашу электронную почту.
        </p>

        {sessionId && (
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-gray-600 mb-1">ID транзакции:</p>
            <p className="text-xs font-mono text-gray-800 break-all">{sessionId}</p>
          </div>
        )}

        <div className="space-y-3">
          <button
            onClick={() => router.push('/products')}
            className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-lg font-semibold transition-colors"
          >
            Продолжить покупки
          </button>
          
          <button
            onClick={() => router.push('/')}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 rounded-lg font-semibold transition-colors"
          >
            На главную
          </button>
        </div>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">Загрузка...</div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
