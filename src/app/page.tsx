'use client'

import styles from "./page.module.css";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function Home() {
  const users = await prisma.user.findMany()

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
            <ul>
          {users.map((user) => (
            <li key={user.id}>{user.login} - {user.password}₽</li>
          ))}
        </ul>
      </Container>
    </Box>
  );
}
