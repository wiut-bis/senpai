const cron = require("node-cron");
const env = require("../../core/env");
const { Markup } = require("telegraf");
const { composer, middleware, bot } = require("../../core/bot");

const consoles = require("../../layouts/consoles");

cron.schedule(
  "50 08 * * 1",
  async () => {
    const text =
      `<b>⛓ Upcoming Class Notification ⛓</b> \n` +
      `\n` +
      `<b>10 minutes left</b> for <code>Computer Science Lecture</code> class. ` +
      `Please, get ready as soon as possible! ` +
      `You can get to the website by pressing buttons below: `;

    const keyboard = Markup.inlineKeyboard([
      [
        Markup.urlButton(
          `Video Conference`,
          `https://intranet.wiut.uz/LearningMaterial/Videoconference/StudentVideoconference?moduleId=559`
        ),
      ],
    ]);

    await bot.telegram.sendMessage(env.BIS, text, {
      parse_mode: "HTML",
      reply_markup: keyboard,
    });
  },
  {
    timezone: "Asia/Tashkent",
  }
);

cron.schedule(
  "50 17 * * 1",
  async () => {
    const text =
      `<b>⛓ Upcoming Class Notification ⛓</b> \n` +
      `\n` +
      `<b>10 minutes left</b> for <code>Introduction to Management and Organisational Beha Lecture</code> class. ` +
      `Please, get ready as soon as possible! ` +
      `You can get to the website by pressing buttons below: `;

    const keyboard = Markup.inlineKeyboard([
      [
        Markup.urlButton(
          `Video Conference`,
          `https://intranet.wiut.uz/LearningMaterial/Videoconference/StudentVideoconference?moduleId=539`
        ),
      ],
    ]);

    await bot.telegram.sendMessage(env.BIS, text, {
      parse_mode: "HTML",
      reply_markup: keyboard,
    });
  },
  {
    timezone: "Asia/Tashkent",
  }
);

middleware(composer);
consoles.module(__filename);
