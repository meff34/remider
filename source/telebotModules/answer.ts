import * as Telebot from 'telebot';
import log from '../utils/log';
import User from '../appModules/User';


export default function answerToMessage(bot: Telebot) {
  bot.on('text', msg => answer(msg, {asReply: false}, bot));
  // bot.on('edit', msg => answer(msg, { asReply: true }));
}

let users: { [key: string]: User } = {};

function answer(message: any, opts = { asReply: false }, bot: Telebot) {
  if (message.text.indexOf('/') !== -1) {
    return;
  }
  const userId = message.from.id;

  if (!(userId in users)) {
    users[userId] = new User(message.from, bot.sendMessage);
  }

  const user = users[userId];
  user.addReminder(message.text);

  setTimeout(() => {
    bot.sendMessage(message.from.id, 'something goes wrong!');
  }, 5000);

  console.log(users);
  message.reply.text('ok');
}
