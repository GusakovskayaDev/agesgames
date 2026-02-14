# Этап 1: Сборка TypeScript
FROM node:20 AS builder

WORKDIR /app

# Копируем зависимости
COPY package*.json ./
RUN npm install

# Копируем исходный код и собираем
COPY . .
RUN npx prisma generate
RUN npm run build

# Этап 2: Финальный образ (только необходимое)
FROM node:20

WORKDIR /app

# Устанавливаем только продакшн зависимости
COPY package*.json ./
RUN npm install --production

# Копируем скомпилированный код и клиент Prisma
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma

# Порт, на котором работает сервер
EXPOSE 3001

# Запуск сервера
CMD ["node", "dist/server.js"]