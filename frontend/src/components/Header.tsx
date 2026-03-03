'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
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

export default function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Мобильное меню
  const drawer = (
    <Box sx={{ width: 250, p: 2 }} onClick={handleDrawerToggle}>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton component={Link} href={item.href}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" color="transparent" elevation={1} sx={{ backdropFilter: 'blur(8px)', backgroundColor: 'rgba(34, 26, 3, 10)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: '80px !important' }}>
          
          {/* Логотип (слева) */}
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 4 }}>
             <Image
              src="/logo.png"
              alt="Игры Веков"
              width={50}
              height={50}
              style={{ marginRight: '12px' }}
            />
            <Typography
              variant="h5"
              component={Link}
              href="/"
              sx={{
                textDecoration: 'none',
                color: '#E4CB99',
                fontWeight: 700,
                fontSize: '1.5rem',
                fontFamily: 'var(--font-belozersk)',
              }}
            >
              Игры Веков
            </Typography>
          </Box>

          {/* Десктопное меню (центр) */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {menuItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                href={item.href}
                sx={{
                  color: '#E4CB99',
                  mx: 1,
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  textTransform: 'none',
                  '&:hover': {
                    color: 'secondary.main',
                    backgroundColor: 'transparent',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Правая часть: телефон и соцсети */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {/* Телефон (скрыт на мобильных) */}
            <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 1 }}>
              <PhoneIcon sx={{ fontSize: '1rem', color: '#E4CB99' }} />
              <Typography variant="body2" sx={{ color: '#E4CB99', fontWeight: 500 }}>
                +7 (921) 533-55-85
              </Typography>
            </Box>

            {/* Социальные сети */}
            <IconButton
              href="https://vk.com/agesgame"
              target="_blank"
              rel="noopener noreferrer"
              size="medium"
              sx={{
                color: 'text.secondary',
                '&:hover': {
                  color: '#E4CB99',
                  backgroundColor: 'transparent',
                },
              }}
            >
              <VkIcon />
            </IconButton>


            {/* Кнопка мобильного меню */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' }, ml: 1 }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Мобильное меню (Drawer) */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 250,
            backgroundColor: 'background.paper',
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}