import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { Telegraf } from 'telegraf';
import { PrismaClient } from '@prisma/client';
import shopRouter from './routes/shop.js';
import { registerBotHandlers } from './bot.js';

dotenv.config();
const app = express();
const prisma = new PrismaClient();
const bot = new Telegraf(process.env.BOT_TOKEN!);

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use('/api', shopRouter);

registerBotHandlers(bot, prisma);

const port = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 4000;
app.listen(port, () => console.log(`Server on http://localhost:${port}`));

bot.launch().then(() => console.log('Bot launched'));
