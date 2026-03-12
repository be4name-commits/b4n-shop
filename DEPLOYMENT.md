# 🚀 B4N Shop — Инструкция по деплою

## ✅ Что уже готово

- ✅ Next.js 14 (App Router) + TypeScript + Tailwind CSS
- ✅ 23 реальных товара с фото и данными из JSON
- ✅ Stripe интеграция для оплаты в CHF
- ✅ GitHub репозиторий: `be4name-commits/b4n-shop`
- ✅ Vercel project ID: `prj_dAHWiQKyH2jPvtSOPJdTIEYbiI1h`
- ✅ Все страницы: главная, каталог, товар, корзина, checkout, B2B
- ✅ B2B PDF презентация на 4 языках

## 🔐 Настройка переменных окружения на Vercel

**ВАЖНО!** Vercel автоматически деплоит из `main` ветки, но нужно добавить Stripe ключи через веб-интерфейс:

1. Зайди на https://vercel.com
2. Открой проект `b4n-shop`
3. Settings → Environment Variables
4. Добавь следующие переменные:

```bash
# ⚠️ ВАЖНО: Используй реальные ключи из .env.local (не коммитить!)
STRIPE_SECRET_KEY=sk_live_51So2W1LJ...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_51So2W1LJ...
NEXT_PUBLIC_BASE_URL=https://be4name.ch
```

**Где взять ключи:**
- Stripe Secret Key: скопируй из `/home/boris/.openclaw/workspace-floki/b4n-shop/.env.local`
- Или получи на https://dashboard.stripe.com/apikeys

5. Сохрани и **Redeploy** проект

## 🌐 Настройка домена be4name.ch

1. В Vercel: Settings → Domains
2. Добавь домен: `be4name.ch`
3. Следуй инструкциям для настройки DNS:
   - Добавь A-запись или CNAME на `cname.vercel-dns.com`
4. Vercel автоматически выпустит SSL сертификат

## 🧪 Локальный запуск

```bash
cd /home/boris/.openclaw/workspace-floki/b4n-shop
npm install
npm run dev
```

Сайт откроется на http://localhost:3000

## 📦 Структура проекта

```
b4n-shop/
├── app/
│   ├── page.tsx              # Главная страница
│   ├── products/
│   │   ├── page.tsx          # Каталог товаров
│   │   └── [id]/page.tsx     # Страница товара
│   ├── cart/page.tsx         # Корзина
│   ├── checkout/
│   │   ├── page.tsx          # Оформление заказа
│   │   └── success/page.tsx  # Успешная оплата
│   ├── b2b/page.tsx          # B2B партнерство
│   └── api/
│       └── checkout/route.ts # API для Stripe Checkout
├── lib/
│   ├── products.ts           # Данные товаров
│   ├── products-data.json    # JSON с 23 товарами
│   └── store.ts              # Zustand store (корзина)
├── public/
│   ├── images/products/      # 23 фото товаров
│   └── b2b-presentation.pdf  # B2B презентация
└── components/
    └── Navigation.tsx        # Навигация

```

## 🎨 Фичи сайта

### Главная страница
- Hero секция с брендом B4N / Be4Name
- 3 блока преимуществ (качество, оплата, B2B)
- CTA на каталог и B2B

### Каталог товаров
- 23 товара в карточках
- Фото + название + цена в CHF
- Категории: Кошельки, Косметички, Несессеры, Ремни, Обувь

### Страница товара
- Галерея фото
- Описание и характеристики
- Кнопка "Добавить в корзину"
- Цена retail в CHF

### Корзина
- Список товаров
- Изменение количества
- Подсчет итоговой суммы
- Переход к оплате

### Checkout
- Интеграция с Stripe Checkout
- Оплата в CHF картой
- Редирект на Stripe hosted page

### B2B секция
- Преимущества сотрудничества
- Скачивание PDF презентации
- Форма обратной связи
- Контактная информация

## 🔍 Troubleshooting

### Stripe ошибки
Если при checkout ошибка "STRIPE_SECRET_KEY не настроен":
1. Проверь переменные окружения в Vercel
2. Убедись что ключ начинается с `sk_live_`
3. Redeploy проект

### Товары не отображаются
- Проверь что `/public/images/products/` содержит PNG файлы с названиями по SKU
- Проверь `lib/products-data.json`

### PDF не скачивается
- Проверь что `/public/b2b-presentation.pdf` существует
- Размер файла: ~26MB (Corporate EN)

## 📊 Текущие данные

- **Товаров:** 23
- **Категорий:** 5
- **Языков в JSON:** 4 (EN, DE, FR, IT)
- **Отображаемый язык:** EN (можно расширить)
- **Валюта:** CHF (Swiss Franc)
- **Презентаций B2B:** 4 языка

## 🎯 Следующие шаги

1. ✅ Добавить переменные окружения в Vercel
2. ✅ Настроить домен be4name.ch
3. ⏳ Протестировать тестовую оплату через Stripe
4. ⏳ Добавить мультиязычность (i18n)
5. ⏳ SEO оптимизация
6. ⏳ Google Analytics / Метрика

## 📞 Контакты

- **GitHub:** https://github.com/be4name-commits/b4n-shop
- **Vercel:** https://vercel.com/projects/b4n-shop
- **Stripe Dashboard:** https://dashboard.stripe.com

---

**Создано Флоки ⚔️ | Vikings Tech Team**
