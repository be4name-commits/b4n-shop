import { Product } from './store';
import productsData from './products-data.json';

// Convert JSON data to Product format
export const products: Product[] = productsData.products.map(item => ({
  id: item.sku,
  name: item.names.en,
  description: `${item.material} - ${item.dimensions}. ${item.features?.en || ''}`,
  price: item.pricing.retail_chf,
  currency: 'CHF',
  images: [`/images/products/${item.sku}.png`],
  category: item.category,
  sku: item.sku,
  material: item.material,
  dimensions: item.dimensions,
  color: item.colors?.en || 'Black',
  b2bPrice: item.pricing.b2b_chf,
  gender: item.gender,
}));

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category);
}

export const categories = [
  { id: 'Wallets', name: 'Кошельки' },
  { id: 'Cosmetic Bags', name: 'Косметички' },
  { id: 'Toiletry Bags', name: 'Несессеры' },
  { id: 'Belts', name: 'Ремни' },
  { id: 'Footwear', name: 'Обувь' },
];
