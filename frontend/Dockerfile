# Этап 1: Сборка Next.js приложения
FROM node:20 AS builder

WORKDIR /app

# Копируем зависимости
COPY package*.json ./
RUN npm install

# Копируем исходный код и собираем
COPY . .
RUN npm run build

# Этап 2: Финальный образ
FROM node:20

WORKDIR /app

# Устанавливаем только продакшн зависимости
COPY package*.json ./
RUN npm install --production

# Копируем скомпилированное приложение
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Порт, на котором работает фронтенд
EXPOSE 3000

# Запуск в продакшн режиме
CMD ["npm", "start"]