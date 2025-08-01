import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export const getUser = (tgId: bigint) =>
  prisma.user.findUnique({
    where: { tgId },
    include: { plants: true, purchases: true },
  });
export const addPlant = (userId: number, type: string) =>
  prisma.plant.create({ data: { userId, type } });
