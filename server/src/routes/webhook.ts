import { Router } from 'express';

const router = Router();

router.post('/telegram-stars', (req, res) => {
  const body = req.body;

  if (body.message?.successful_payment) {
    const { invoice_payload } = body.message.successful_payment;

    const [_, sku, __, userId] = invoice_payload.split(':');
    console.log(`🎉 Покупка подтверждена: SKU = ${sku}, User ID = ${userId}`);

    // TODO: выдать пользователю бустер или саженец — зависит от sku

    return res.sendStatus(200);
  }

  res.sendStatus(200);
});

export default router;
