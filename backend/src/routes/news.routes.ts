import express from 'express';
import { getAllNews, getNewsById } from '../controllers/controller';

const router = express.Router();

// GET /api/news - получить все новости
router.get('/', getAllNews);

// GET /api/news/:id - получить новость по id
router.get('/:id', getNewsById);

export default router;