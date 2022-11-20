import * as dotenv from 'dotenv'
import { Telegraf } from 'telegraf';

import getRandomNumber from './modules/utils/getRandomNumber.js';
import checkMessage from './modules/utils/checkMessage.js';

import proverbs from './modules/contants/proverbs.js';

dotenv.config()
const { TG_API_TOKEN } = process.env;

const bot = new Telegraf(TG_API_TOKEN);

bot.on('text', (ctx, next) => {
  const {
    message: { text }
  } = ctx;

  const serializedMessageText = text.toLowerCase().split(' ');

  const {
    anySeekWordInMessage,
    anySpeciesWordInMessage,
    anyCatWordInMessage,
    anyVolgaWordInMessage,
  } = checkMessage(serializedMessageText);

  if (anySeekWordInMessage) {
    ctx.reply('«Я максимум один день болею». Данил');
  } else if (anySpeciesWordInMessage) {
    ctx.reply('«Цветных и черных...». Дядька Семён');
  } else if (anyCatWordInMessage) {
    ctx.reply('«КОТ - Коренной Обитатель Тюрьмы». Рома');
  } else if (anyVolgaWordInMessage) {
    ctx.reply('«Волга хуйня по умолчанию». Коля');
  }

  next();
});

bot.command('aboba', ctx => {
  const proverbRandomIndex = getRandomNumber({
    min: 0,
    max: proverbs.length,
  });

  ctx.reply(proverbs[proverbRandomIndex]);
});

// Start bot
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
