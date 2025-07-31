# 🌱 Garden Grow Pro — Telegram Mini App

Полноценная «фермерская» игра внутри Telegram: сажай растения, собирай урожай, покупай удобрения и декорации за **Telegram Stars (XTR)**.

## 🔧 Старт за 2 минуты

1. Склонируй/распакуй проект.
2. Установи зависимости:  
   ```bash
   npm run install:all
   
3. Скопируй .env.example → .env и пропиши BOT_TOKEN.
4. npm run dev — игра откроется на http://localhost:3000.
Бот поднимет webhook автоматически (ngrok при npm run dev).

📦 Стек
Frontend: React 18 + Vite + PixiJS 7
Backend: Node 20 + Express + Telegraf + Prisma
DB: PostgreSQL
Deploy: Docker & Docker-Compose

📊 Контент

15 видов растений
43 товара в магазине (растения, удобрения, декор, бустеры, пропуски)
Ежедневные награды, ачивки, сезонный battle-pass
Полная интеграция Telegram Stars (XTR)

📄 Лицензия

MIT © 2025
