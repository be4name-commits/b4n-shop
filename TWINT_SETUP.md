# TWINT Setup Instructions для B4N Shop

## ✅ TWINT уже включен в код

В `app/api/checkout/route.ts` TWINT уже добавлен:
```typescript
payment_method_types: ['card', 'twint']
```

## 🔧 Настройка в Stripe Dashboard

### 1. Войдите в Stripe Dashboard
https://dashboard.stripe.com

### 2. Включите TWINT
1. Перейдите в **Settings** → **Payment methods**
2. Найдите **TWINT** в списке методов оплаты
3. Нажмите **Turn on** (включить)
4. Подтвердите активацию

### 3. Проверьте настройки для Швейцарии
- **Currency**: убедитесь что **CHF** (Swiss Franc) включен
- **Countries**: включите Швейцарию (CH) как основную страну

### 4. Тестирование (Test Mode)

В тестовом режиме TWINT можно протестировать с помощью:
- Test Card для проверки всего flow
- TWINT появится как опция в Checkout UI

### 5. Production Mode

После перехода в production режим:
1. Переключитесь на **Live mode** в Stripe
2. Убедитесь что TWINT активирован и в Live mode
3. Проверьте что в `.env.local` используются **live keys** (начинаются с `pk_live_` и `sk_live_`)

## 📋 Checklist

- [x] TWINT добавлен в payment_method_types
- [x] Locale установлен на 'auto' для корректного отображения
- [x] Shipping countries включают Швейцарию
- [ ] TWINT активирован в Stripe Dashboard
- [ ] CHF валюта включена
- [ ] Протестировано в Test Mode
- [ ] Активировано в Production

## 🇨🇭 Почему TWINT критичен для Швейцарии

TWINT - самый популярный мобильный платежный метод в Швейцарии:
- **95%** Swiss smartphones имеют TWINT
- Более **4.5 млн** активных пользователей
- Мгновенные платежи без комиссий для покупателей
- Интеграция с Swiss банками

**Без TWINT вы теряете значительную часть Swiss рынка!**

## 🔗 Полезные ссылки

- [Stripe TWINT Documentation](https://stripe.com/docs/payments/twint)
- [TWINT Official](https://www.twint.ch/)
- [Stripe Dashboard](https://dashboard.stripe.com)

---

**Status**: ✅ Код готов, нужна активация в Stripe Dashboard
