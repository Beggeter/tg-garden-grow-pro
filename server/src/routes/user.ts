import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { getUser } from '../services/userService.js';
const router = Router();
const prisma = new PrismaClient();

router.get('/user/:id', async (req, res) => {
  const user = await getUser(BigInt(req.params.id));
  res.json(user);
});

export default router;
