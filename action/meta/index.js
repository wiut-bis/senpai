const { composer, middleware } = require("../../core/bot");

const date = require("./date");
const consoles = require("../../layouts/consoles");
const message = require("../../layouts/messages");
const keyboard = require("../../layouts/keyboards");
const database = require("../../database/db").timetable;

composer.command(`timetable`, async (ctx) => {
  const currentDay = (await date()).toString();

  const timetable = async () => {
    let text = `<b>Today's Timetable:</b>`;

    for (let subject of database["1"]) {
      let subText =
        `\n` +
        `\n` +
        `<b>Name:</b> <i>${subject["name"]}</i> \n` +
        `<b>Type:</b> <i>${subject["type"]}</i> \n` +
        `<b>Tutor:</b> <i>${subject["tutor"]}</i> \n` +
        `<b>Time (start-end):</b> <code>${subject["start"]}-${
          subject["start"] + subject["length"]
        }</code> \n`;

      text += subText;
    }

    const editLink = `https://github.com/4bis1/senpai/blob/master/database/json/timetable.json`;
    const editString =
      `\n` +
      `<b>If you found mistake, please take consider correcting</b> <a href="${editLink}">timetable.json</a> <b>in our repository!</b>`;

    text += editString;

    return text;
  };
  await ctx.replyWithHTML(await timetable(), {
    disable_web_page_preview: true,
  });
});

middleware(composer);
consoles.module(__filename);
