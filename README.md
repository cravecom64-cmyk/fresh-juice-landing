# Лендинг Fresh Juice — блендер-пляшка

Standalone-лендинг под 1 товар (tt02). Один HTML-файл + serverless-функция заказа.

## Структура
- `index.html` — весь лендинг (mobile-first, 480px)
- `api/order.js` — Vercel function: форма → Telegram
- `.env.example` — переменные для бота

## Деплой на Vercel
1. Залить папку в отдельный GitHub-репозиторий
2. Vercel → Add New Project → импорт репозитория (Framework: Other)
3. Settings → Environment Variables: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID` (те же, что для основного сайта)
4. Deploy

## Локальный просмотр
Открыть `index.html` в браузере. Форма локально не отправит (нет /api) — покажет fallback на Telegram.

## TODO
- Фото сейчас хотлинк с phantom-drop.com.ua — перед запуском рекламы заменить на свои (Hixvild img2img), положить в папку `img/`
- TikTok Pixel / GA4 — через analytics-dev перед запуском трафика
