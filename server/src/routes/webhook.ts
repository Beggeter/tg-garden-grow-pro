import { Router } from 'express';

const router = Router();

router.post('/telegram-stars', async (req, res) => {
  const body = req.body;

  const payment = body?.message?.successful_payment;
  const from = body?.message?.from;

  if (!payment || !from) return res.sendStatus(400);

  const { invoice_payload, currency, total_amount } = payment;

  if (currency !== 'XTR') {
    console.warn('❗️ Оплата не в XTR — возможна подделка');
    return res.sendStatus(400);
  }

  const [_, sku, __, userIdStr] = invoice_payload.split(':');
  const userId = parseInt(userIdStr, 10);

  if (!sku || !userId) return res.sendStatus(400);

  console.log(`✅ Оплата подтверждена:
  SKU: ${sku}
  UserID: ${userId}
  From Telegram ID: ${from.id}
  Сумма: ${total_amount} XTR`);

  // TODO: Выдать товар пользователю
  // Например: if (sku.startsWith('booster_')) { activateBooster(userId, sku); }

  return res.sendStatus(200);
});

export default router;
