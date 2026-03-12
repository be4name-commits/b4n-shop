# ✅ Финальный чеклист — B4N Shop

## Что сделано автоматически ✅

- [x] Next.js 14 проект создан
- [x] Stripe SDK установлен
- [x] GitHub репозиторий создан и подключён
- [x] 23 товара загружены из JSON
- [x] 23 фото товаров скопированы
- [x] Все страницы созданы (главная, каталог, товар, корзина, checkout, B2B)
- [x] API endpoint для Stripe Checkout реализован
- [x] B2B PDF презентация добавлена
- [x] Код закоммичен и запушен на GitHub
- [x] Vercel project подключён (auto-deploy работает)

## Что нужно сделать вручную (5 минут) ⏱️

### 1️⃣ Добавить Stripe ключи в Vercel

Зайди на https://vercel.com → проект `b4n-shop` → Settings → Environment Variables

Добавь 3 переменные:

```
# Скопируй ключи из .env.local файла:
STRIPE_SECRET_KEY=sk_live_51So2W1LJ...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_51So2W1LJ...
NEXT_PUBLIC_BASE_URL=https://be4name.ch
```

💡 **Реальные ключи находятся в:** `b4n-shop/.env.local`

Нажми **Save** → потом **Redeploy**

### 2️⃣ Настроить домен be4name.ch

В Vercel → Settings → Domains → Add Domain → `be4name.ch`

Следуй инструкциям для DNS:
- Если домен на Cloudflare/другом регистраторе: добавь CNAME запись
- Vercel автоматически выпустит SSL

### 3️⃣ Проверить что сайт работает

После деплоя:
1. Открой `https://be4name.ch`
2. Проверь что товары отображаются
3. Добавь товар в корзину
4. Попробуй checkout (будет редирект на Stripe)
5. Скачай B2B презентацию

## 🔥 Быстрые ссылки

- **Vercel Dashboard:** https://vercel.com/dashboard
- **GitHub Repo:** https://github.com/be4name-commits/b4n-shop
- **Stripe Dashboard:** https://dashboard.stripe.com
- **Local Dev:** http://localhost:3000

## 🎯 Всё! Сайт готов к работе

После выполнения чеклиста:
- ✅ Сайт работает на be4name.ch
- ✅ Оплата через Stripe настроена
- ✅ 23 товара доступны для покупки
- ✅ B2B секция готова

---

**Время на завершение: ~5 минут ⚡**

**Если нужна помощь — докладывай Флоки! ⚔️**
