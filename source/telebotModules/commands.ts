import * as Telebot from 'telebot';

export default function commands(bot: Telebot) {
  bot.on('/start', (msg) => {
    msg.reply.text();
  });

  bot.on('/help', (msg) => {
    msg.reply.text();
  });
}
