import * as Telebot from 'telebot';
import log from '../utils/log';

export default function answerToMessage(bot: Telebot) {
  bot.on('text', msg => answer(msg));
  // bot.on('edit', msg => answer(msg, { asReply: true }));
}

function answer(message: any, opts = { asReply: false }) {
  console.log(message);
  if (message.text.indexOf('/') !== -1) {
    return;
  }

  message.reply.text(`Хорошо, я напомню об этом`);
}
