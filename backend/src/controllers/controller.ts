import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

// Получить все новости
export const getAllNews = async (req: Request, res: Response) => {
  try {
    const news = await prisma.news.findMany({
      orderBy: {
        created_at: 'desc', // Сортировка по дате (новые сверху)
      },
    });
    
    res.json(news);
  } catch (error) {
    console.error('Ошибка получения новостей:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
};

// Получить одну новость по id
export const getNewsById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const newsItem = await prisma.news.findUnique({
      where: { id: Number(id) },
    });

    if (!newsItem) {
      return res.status(404).json({ error: 'Новость не найдена' });
    }

    res.json(newsItem);
  } catch (error) {
    console.error('Ошибка получения новости:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
};