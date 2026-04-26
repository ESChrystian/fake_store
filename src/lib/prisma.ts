// src/lib/prisma.ts
import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

// Configurar conexão com Neon
const connectionString = process.env.DATABASE_URL!;

// Criar pool de conexões
const pool = new Pool({ connectionString });

// Criar adapter para Prisma
const adapter = new PrismaPg(pool);

// Criar cliente Prisma com o adapter
const prismaClientSingleton = () => {
  return new PrismaClient({
    adapter,
  });
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;