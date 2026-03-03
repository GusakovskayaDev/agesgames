'use client';

import { useEffect, useState } from 'react';

interface NewsItem {
  id: number;
  title: string;
  description: string;
  image_url: string | null;
  created_at: string;
}

export function NewsList() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || '/api';
      const response = await fetch(`${apiUrl}/news`);
      
      const data = await response.json();
      setNews(data);
    } catch (error) {
      console.error('Ошибка загрузки новостей:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      {news.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p >{item.description}</p>
          <span >
            {new Date(item.created_at).toLocaleDateString('ru-RU')}
          </span>
        </div>
      ))}
    </div>
  );
}