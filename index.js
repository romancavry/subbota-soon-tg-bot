import * as dotenv from 'dotenv';
import { Telegraf } from 'telegraf';

import getQuote from './lib/getQuote.js';
import proverbs from './lib/proverbs.js';

dotenv.config()

const bot = new Telegraf(process.env.TG_API_TOKEN);

bot.on('text', (ctx, next) => {
  const quote = getQuote(ctx.message.text);

  if (quote) {
    ctx.reply(quote);
  }

  next();
});

bot.command('quote', ctx => {
  const min = 0;
  const max = proverbs.length;

  const index = Math.floor(Math.random() * (max - min) + min);

  ctx.reply(proverbs[index]);
});

// Start bot
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
