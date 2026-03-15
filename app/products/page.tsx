'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { products, categories } from '@/lib/products';
import ProductFilters from '@/components/ProductFilters';

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

  // Filter products based on search, category, and price
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];

      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchQuery, selectedCategory, priceRange]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Product Catalog</h1>
        
        {/* Filters */}
        <ProductFilters
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          priceRange={priceRange}
          onPriceRangeChange={setPriceRange}
        />

        {/* Results count */}
        <div className="mb-6 text-gray-600">
          Showing <span className="font-semibold">{filteredProducts.length}</span> of {products.length} products
        </div>
        
        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-gray-100"
              >
                <div className="relative h-64 bg-gray-200 overflow-hidden">
                  {product.images[0] ? (
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <span className="text-6xl">📦</span>
                    </div>
                  )}
                </div>
                
                <div className="p-5 border-t border-gray-100">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-purple-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                    <span className="text-2xl font-bold text-purple-600">
                      {product.price.toFixed(2)} {product.currency}
                    </span>
                    <button className="bg-black hover:bg-white hover:text-black border-2 border-black text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-md hover:shadow-lg">
                      Buy
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">No products found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('');
                setPriceRange([0, 1000]);
              }}
              className="mt-4 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
