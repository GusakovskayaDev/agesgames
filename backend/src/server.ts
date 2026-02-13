import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import newsRoutes from './routes/news.routes';

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
app.listen(PORT, () => {
  console.log(`🚀 Backend запущен на порту ${PORT}`);
  console.log(`📡 http://localhost:${PORT}/api/health`);
  console.log(`📰 Новости: http://localhost:${PORT}/api/news`);
});