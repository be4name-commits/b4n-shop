import { Product } from './store';
import productsData from './products-data.json';
import { Locale } from './i18n';

// Convert JSON data to Product format with multi-language support
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

// Get product name by locale
export function getProductName(sku: string, locale: Locale = 'en'): string {
  const product = productsData.products.find(p => p.sku === sku);
  if (!product) return '';
  
  const names = product.names as Record<Locale, string>;
  return names[locale] || names.en;
}

// Get product description by locale
export function getProductDescription(sku: string, locale: Locale = 'en'): string {
  const product = productsData.products.find(p => p.sku === sku);
  if (!product) return '';
  
  const features = product.features as Record<Locale, string> | undefined;
  const featureText = features?.[locale] || features?.en || '';
  
  return `${product.material} - ${product.dimensions}. ${featureText}`;
}

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category);
}

export const categories = [
  { id: 'Wallets', name: 'Wallets', de: 'Geldbörsen', fr: 'Portefeuilles', it: 'Portafogli' },
  { id: 'Cosmetic Bags', name: 'Cosmetic Bags', de: 'Kosmetiktaschen', fr: 'Trousses de maquillage', it: 'Borse per cosmetici' },
  { id: 'Toiletry Bags', name: 'Toiletry Bags', de: 'Kulturbeutel', fr: 'Trousses de toilette', it: 'Necessaire' },
  { id: 'Belts', name: 'Belts', de: 'Gürtel', fr: 'Ceintures', it: 'Cinture' },
  { id: 'Footwear', name: 'Footwear', de: 'Schuhe', fr: 'Chaussures', it: 'Calzature' },
];
