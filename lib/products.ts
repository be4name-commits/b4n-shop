import { Product } from './store';

// Mock data - заменить реальными товарами
export const products: Product[] = [
  {
    id: '1',
    name: 'Премиум товар 1',
    description: 'Описание премиум товара швейцарского качества',
    price: 149.00,
    currency: 'CHF',
    images: ['/images/product1.jpg'],
    category: 'premium'
  },
  {
    id: '2',
    name: 'Премиум товар 2',
    description: 'Еще один отличный товар',
    price: 199.00,
    currency: 'CHF',
    images: ['/images/product2.jpg'],
    category: 'premium'
  },
  {
    id: '3',
    name: 'Премиум товар 3',
    description: 'Топовый выбор наших клиентов',
    price: 249.00,
    currency: 'CHF',
    images: ['/images/product3.jpg'],
    category: 'bestseller'
  },
  {
    id: '4',
    name: 'Премиум товар 4',
    description: 'Эксклюзивное предложение',
    price: 299.00,
    currency: 'CHF',
    images: ['/images/product4.jpg'],
    category: 'exclusive'
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category);
}
