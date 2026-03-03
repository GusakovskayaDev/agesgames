'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NextLink from 'next/link';
import Image from 'next/image';

const VkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="38" height="38" viewBox="0 0 48 48">
  <path fill="#7C8B6C" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"></path><path fill="#fff" d="M35.937,18.041c0.046-0.151,0.068-0.291,0.062-0.416C35.984,17.263,35.735,17,35.149,17h-2.618 c-0.661,0-0.966,0.4-1.144,0.801c0,0-1.632,3.359-3.513,5.574c-0.61,0.641-0.92,0.625-1.25,0.625C26.447,24,26,23.786,26,23.199 v-5.185C26,17.32,25.827,17,25.268,17h-4.649C20.212,17,20,17.32,20,17.641c0,0.667,0.898,0.827,1,2.696v3.623 C21,24.84,20.847,25,20.517,25c-0.89,0-2.642-3-3.815-6.932C16.448,17.294,16.194,17,15.533,17h-2.643 C12.127,17,12,17.374,12,17.774c0,0.721,0.6,4.619,3.875,9.101C18.25,30.125,21.379,32,24.149,32c1.678,0,1.85-0.427,1.85-1.094 v-2.972C26,27.133,26.183,27,26.717,27c0.381,0,1.158,0.25,2.658,2c1.73,2.018,2.044,3,3.036,3h2.618 c0.608,0,0.957-0.255,0.971-0.75c0.003-0.126-0.015-0.267-0.056-0.424c-0.194-0.576-1.084-1.984-2.194-3.326 c-0.615-0.743-1.222-1.479-1.501-1.879C32.062,25.36,31.991,25.176,32,25c0.009-0.185,0.105-0.361,0.249-0.607 C32.223,24.393,35.607,19.642,35.937,18.041z"/>
  </svg>
);

// Пункты меню
const menuItems = [
  { label: 'Мастерская', href: '/workshop' },
  { label: 'Наши игры', href: '/games' },
  { label: 'Музей', href: '/museum' },
  { label: 'Образовательные программы', href: '/education' },
  { label: 'Новости', href: '/news' },
];

// Дополнительная информация
const contactInfo = {
  phone: '+7 (921) 533-55-85',
  address: 'г Белозерск, ул Советский Вал, д 8',
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="xl" disableGutters sx={{ px: 2 }}>
        <Grid container spacing={4}>
          
          {/* Колонка 1: Логотип и описание */}
          <Grid size={6}>
            <Image
              src="/logo.png"
              alt="Игры Веков"
              width={50}
              height={50}
              style={{ marginRight: '12px' }}
            />
            <Typography
              variant="h5"
              component={NextLink}
              href="/"
              sx={{
                textDecoration: 'none',
                color: 'text.primary',
                fontWeight: 700,
                fontFamily: 'var(--font-belozersk)',
                fontSize: '1.5rem',
                mb: 2,
                display: 'inline-block',
              }}
            >
              Игры Веков
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Погружение в историю игр всех времен. От классики до современных шедевров.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                href="https://vk.com"
                target="_blank"
                rel="noopener noreferrer"
                size="medium"
                sx={{
                  color: 'text.secondary',
                  '&:hover': {
                    color: '#0077FF',
                    backgroundColor: 'transparent',
                  },
                }}
              >
                <VkIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Колонка 2: Навигация */}
          <Grid size={3}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: 'text.primary' }}>
              Навигация
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  component={NextLink}
                  href={item.href}
                  underline="none"
                  color="text.secondary"
                  sx={{
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Колонка 3: Контакты */}
          <Grid size={3}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: 'text.primary' }}>
              Контакты
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon sx={{ fontSize: '1rem', color: 'text.secondary' }} />
                <Typography variant="body2" color="text.secondary">
                  {contactInfo.phone}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOnIcon sx={{ fontSize: '1rem', color: 'text.secondary' }} />
                <Typography variant="body2" color="text.secondary">
                  {contactInfo.address}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Разделитель */}
        <Divider sx={{ my: 4 }} />

        {/* Нижняя строка: Copyright и доп. ссылки */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2" color="text.secondary">
            © {currentYear} Игры Веков. Все права защищены.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link
              component={NextLink}
              href="/privacy"
              underline="none"
              color="text.secondary"
              variant="body2"
              sx={{ '&:hover': { color: 'primary.main' } }}
            >
              Политика конфиденциальности
            </Link>
            <Link
              component={NextLink}
              href="/terms"
              underline="none"
              color="text.secondary"
              variant="body2"
              sx={{ '&:hover': { color: 'primary.main' } }}
            >
              Условия использования
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}