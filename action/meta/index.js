const { composer, middleware } = require("../../core/bot");

const consoles = require("../../layouts/consoles");
const message = require("../../layouts/messages");
const keyboard = require("../../layouts/keyboards");
const database = require("../../database/db").timetable;

const date = require("./date");

composer.command(`timetable`, async (ctx) => {
  const currentDay = await date();

  await ctx.replyWithHTML(currentDay, {
    parse_mode: "HTML",
  });
});

middleware(composer);
consoles.module(__filename);
