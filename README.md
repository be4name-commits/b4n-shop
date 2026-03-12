# B4N Shop - Be4Name E-commerce

Товарный сайт швейцарского бренда Be4Name на Next.js 14 + Stripe + Vercel.

## 🛠 Стек технологий

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Stripe** (оплата в CHF)
- **Zustand** (управление корзиной)
- **Lucide React** (иконки)

## 📁 Структура проекта

```
b4n-shop/
├── app/
│   ├── page.tsx              # Главная страница
│   ├── products/             # Каталог товаров
│   │   ├── page.tsx          # Список товаров
│   │   └── [id]/page.tsx     # Страница товара
│   ├── cart/page.tsx         # Корзина
│   ├── checkout/             # Оформление заказа
│   │   ├── page.tsx          # Страница checkout
│   │   └── success/page.tsx  # Успешная оплата
│   ├── b2b/page.tsx          # B2B партнерство
│   └── api/
│       └── checkout/route.ts # API для Stripe
├── components/
│   └── Navigation.tsx        # Навигация
├── lib/
│   ├── store.ts              # Zustand store (корзина)
│   └── products.ts           # Данные товаров
└── public/
    └── images/               # Фото товаров
```

## 🚀 Запуск проекта

### 1. Установка зависимостей

```bash
npm install
```

### 2. Настройка переменных окружения

Создайте файл `.env.local`:

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 3. Запуск dev сервера

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000)

## 📦 Добавление товаров

Отредактируйте файл `lib/products.ts`:

```typescript
export const products: Product[] = [
  {
    id: '1',
    name: 'Название товара',
    description: 'Описание товара',
    price: 149.00,
    currency: 'CHF',
    images: ['/images/product1.jpg'],
    category: 'premium'
  },
  // ...
];
```

Фото товаров размещайте в `public/images/`.

## 💳 Настройка Stripe

1. Зарегистрируйтесь на [stripe.com](https://stripe.com)
2. Получите ключи API (Test mode → API keys)
3. Добавьте их в `.env.local`:
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - публичный ключ
   - `STRIPE_SECRET_KEY` - секретный ключ
4. В production включите CHF как валюту в настройках Stripe

## 🌐 Деплой на Vercel

### Через GitHub

1. Создайте GitHub репозиторий
2. Push проекта:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/b4n-shop.git
   git push -u origin main
   ```

3. Зайдите на [vercel.com](https://vercel.com)
4. New Project → Import репозиторий
5. Добавьте переменные окружения:
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `STRIPE_SECRET_KEY`
   - `NEXT_PUBLIC_BASE_URL` (https://be4name.ch после подключения домена)
6. Deploy

### Подключение домена be4name.ch

1. Vercel → Project Settings → Domains
2. Добавьте домен `be4name.ch`
3. Следуйте инструкциям по настройке DNS записей

## 📄 B2B Презентация

Файл для скачивания должен быть размещен в `public/b2b-presentation.pdf`.

## 🔧 Команды

```bash
npm run dev          # Запуск dev сервера
npm run build        # Production build
npm run start        # Запуск production сервера
npm run lint         # ESLint проверка
```

## 📝 TODO

- [ ] Добавить реальные товары и фото
- [ ] Настроить Stripe ключи (production)
- [ ] Добавить B2B презентацию (PDF)
- [ ] Настроить email уведомления
- [ ] Подключить домен be4name.ch
- [ ] Добавить метатеги и SEO
- [ ] Настроить аналитику (Google Analytics)

## 🇨🇭 Made in Switzerland

© 2024 B4N - Be4Name
