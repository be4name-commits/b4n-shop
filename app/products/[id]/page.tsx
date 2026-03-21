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
  const [selectedSize, setSelectedSize] = useState<string>('');
  
  const isFootwear = product?.category === 'Footwear';
  const availableSizes = ['36', '37', '38', '39'];
  const unavailableSizes = ['37', '39']; // Example: these sizes are out of stock

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Товар не найден</h1>
          <button
            onClick={() => router.push('/products')}
            className="text-black hover:underline"
          >
            Вернуться к каталогу
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (isFootwear && !selectedSize) {
      alert('Bitte wählen Sie eine Größe');
      return;
    }
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-black mb-8 transition-colors"
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
                    className="object-contain p-4"
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
                        selectedImage === idx ? 'border-black' : 'border-transparent'
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
              
              <div className="text-4xl font-bold text-black mb-6">
                {product.price.toFixed(2)} {product.currency}
              </div>

              <div className="prose max-w-none mb-6">
                <div className="text-gray-700 leading-relaxed space-y-3">
                  {product.material && (
                    <p><strong>Material:</strong> {product.material}</p>
                  )}
                  {product.dimensions && (
                    <p><strong>Grösse:</strong> {product.dimensions}</p>
                  )}
                  {product.color && (
                    <p><strong>Farbe:</strong> {product.color}</p>
                  )}
                  <p><strong>Verpackung:</strong> Jedes Stück wird sorgfältig in einem stilvollen, markenspezifischen Filzetui geliefert.</p>
                  <p className="text-sm text-gray-600 mt-4">
                    • Kostenloser Versand ab 299 CHF<br />
                    • 14 Tage Rückgaberecht
                  </p>
                </div>
              </div>

              {product.category && (
                <div className="mb-6">
                  <span className="inline-block bg-gray-100 text-black px-4 py-2 rounded-full text-sm font-semibold">
                    {product.category}
                  </span>
                </div>
              )}
              
              {/* Size Selector for Footwear */}
              {isFootwear && (
                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-3">Größe wählen:</label>
                  <div className="flex gap-2">
                    {availableSizes.map((size) => {
                      const isUnavailable = unavailableSizes.includes(size);
                      const isSelected = selectedSize === size;
                      
                      return (
                        <button
                          key={size}
                          onClick={() => !isUnavailable && setSelectedSize(size)}
                          disabled={isUnavailable}
                          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                            isUnavailable
                              ? 'bg-gray-200 text-gray-400 line-through cursor-not-allowed'
                              : isSelected
                              ? 'bg-black text-white'
                              : 'bg-gray-100 text-black hover:bg-gray-200'
                          }`}
                        >
                          {size}
                        </button>
                      );
                    })}
                  </div>
                  {isFootwear && !selectedSize && (
                    <p className="text-sm text-red-600 mt-2">Bitte wählen Sie eine Größe</p>
                  )}
                </div>
              )}

              <button
                onClick={handleAddToCart}
                disabled={isFootwear && !selectedSize}
                className={`w-full flex items-center justify-center gap-3 py-4 px-6 rounded-lg text-lg font-semibold transition-all ${
                  added
                    ? 'bg-green-600 text-white'
                    : isFootwear && !selectedSize
                    ? 'bg-gray-400 text-white cursor-not-allowed'
                    : 'bg-black hover:bg-gray-800 text-white'
                }`}
              >
                <ShoppingCart className="w-6 h-6" />
                {added ? 'In den Warenkorb gelegt!' : 'In den Warenkorb'}
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
