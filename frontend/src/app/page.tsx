'use client'

import styles from "./page.module.css";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Home() {
  return (
    <Box 
      component="main" 
      sx={{ 
        flexGrow: 1, 
        py: 4,
        minHeight: 'calc(100vh - 80px)',
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="h4" component="h1" gutterBottom>
          Добро пожаловать в Игры Веков
        </Typography>
      </Container>
    </Box>
  );
}
