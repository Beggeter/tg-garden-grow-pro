import express from 'express';
import bodyParser from 'body-parser';
const router = express.Router();

router.use(bodyParser.json());

router.post('/', async (req, res) => {
  const { message } = req.body;

  if (message?.successful_payment) {
    const payload = JSON.parse(message.successful_payment.invoice_payload);
    const { sku, userId } = payload;

    console.log(`✅ Оплата получена: ${sku} от ${userId}`);

    // TODO: Ваша логика - записать покупку, активировать бустер, добавить skin и т.д.
    // Пример: если booster - активировать, если skin - сохранить в user profile
    // Сейчас пока просто лог

    return res.sendStatus(200);
  }

  return res.sendStatus(200);
});

export default router;
