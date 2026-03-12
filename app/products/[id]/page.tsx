'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { getProductById } from '@/lib/products';
import { useCartStore } from '@/lib/store';

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const product = getProductById(params.id as string);
  const addItem = useCartStore((state) => state.addItem);
  const [selectedImage, setSelectedImage] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Товар не найден</h1>
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

  const handleAddToCart = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-purple-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Назад
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Image Gallery */}
            <div>
              <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden mb-4">
                {product.images[selectedImage] ? (
                  <Image
                    src={product.images[selectedImage]}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <span className="text-9xl">📦</span>
                  </div>
                )}
              </div>
              
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((image, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`relative h-20 bg-gray-200 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === idx ? 'border-purple-600' : 'border-transparent'
                      }`}
                    >
                      {image ? (
                        <Image src={image} alt={`${product.name} ${idx + 1}`} fill className="object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400 text-2xl">
                          📦
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              
              <div className="text-4xl font-bold text-purple-600 mb-6">
                {product.price.toFixed(2)} {product.currency}
              </div>

              <div className="prose max-w-none mb-8">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              {product.category && (
                <div className="mb-6">
                  <span className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">
                    {product.category}
                  </span>
                </div>
              )}

              <button
                onClick={handleAddToCart}
                className={`w-full flex items-center justify-center gap-3 py-4 px-6 rounded-lg text-lg font-semibold transition-all ${
                  added
                    ? 'bg-green-600 text-white'
                    : 'bg-purple-600 hover:bg-purple-700 text-white'
                }`}
              >
                <ShoppingCart className="w-6 h-6" />
                {added ? 'Добавлено в корзину!' : 'Добавить в корзину'}
              </button>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">Гарантии:</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ Швейцарское качество</li>
                  <li>✓ Безопасная оплата через Stripe</li>
                  <li>✓ Быстрая доставка</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
