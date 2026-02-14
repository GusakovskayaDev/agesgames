import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import newsRoutes from './routes/news.routes';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Backend is running!' });
});

app.use('/api/news', newsRoutes);

// Start server
app.listen(PORT, async () => {
  // Подключаемся к базе данных и применяем миграции
  const prisma = new PrismaClient();
  try {
    await prisma.$connect();
    console.log('✅ Подключились к базе данных');
    
    // Выполняем миграцию (если нужно)
    await prisma.$executeRaw`CREATE TABLE IF NOT EXISTS news (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      image_url VARCHAR(500),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`;
    
    console.log('✅ Миграция выполнена');
  } catch (error) {
    console.error('❌ Ошибка базы данных:', error);
  }
  
  console.log(`🚀 Backend запущен на порту ${PORT}`);
  console.log(`📡 http://localhost:${PORT}/api/health`);
});