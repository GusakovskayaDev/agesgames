import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const hashedPassword = await bcrypt.hash('admin', 10)
  
  await prisma.user.upsert({
    where: { login: 'admin' },
    update: {},
    create: {
      login: 'admin',
      password: hashedPassword,
      role: 'admin',
    },
  })
  
  console.log('✅ Админ создан: admin')
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect())