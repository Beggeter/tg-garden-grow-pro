import { Router } from 'express';
import { Telegraf } from 'telegraf';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();
const bot = new Telegraf(process.env.BOT_TOKEN!);

router.post('/createInvoice', async (req, res) => {
  const { sku, userId } = req.body;
  const item = require('../data/shopItems.json').find((i: any) => i.sku === sku);
  if (!item) return res.status(400).send('SKU not found');

  const invoice = await bot.telegram.createInvoiceLink({
    title: item.name,
    description: item.description,
    payload: `${sku}_${userId}_${Date.now()}`,
    currency: 'XTR',
    prices: [{ label: item.name, amount: item.price }],
  });
  res.json({ invoiceUrl: invoice });
});

export default router;
