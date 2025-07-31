import { Telegraf } from 'telegraf';
import { PrismaClient } from '@prisma/client';

export function registerBotHandlers(bot: Telegraf, prisma: PrismaClient) {
  bot.on('pre_checkout_query', async (ctx) => {
    const payload = ctx.preCheckoutQuery.invoice_payload;
    const [sku] = payload.split('_');
    const exists = require('./data/shopItems.json').some((i: any) => i.sku === sku);
    return ctx.answerPreCheckoutQuery(exists);
  });

  bot.on('successful_payment', async (ctx) => {
    const { invoice_payload, total_amount } = ctx.message.successful_payment;
    const [sku, userId] = invoice_payload.split('_');
    await prisma.purchase.create({
      data: { userId: Number(userId), sku, price: total_amount },
    });
    await ctx.reply(`✅ Куплено ${sku} за ${total_amount} ⭐`);
  });
}
