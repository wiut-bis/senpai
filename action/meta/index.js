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

    for (let subject of database[currentDay]) {
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

    return text;
  };
  await ctx.replyWithHTML(await timetable());
});

middleware(composer);
consoles.module(__filename);
