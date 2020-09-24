const { Markup } = require("telegraf");

exports.start = Markup.inlineKeyboard([
  [Markup.callbackButton("Show more information", "help")],
]);

exports.help = Markup.inlineKeyboard([
  [
    Markup.urlButton(
      "Announcements Channel",
      "https://t.me/joinchat/AAAAAFkWg9XgdWv0c4Qs8Q"
    ),
  ],
]);

exports.invalid = Markup.inlineKeyboard([
  Markup.callbackButton(`Show available commands`, `help`),
]);

exports.error_admin = Markup.inlineKeyboard([
  Markup.urlButton(`Contact with admin`, `https://t.me/genemator`),
]);

exports.links = async (links) => {
  const keyboard = [];
  for (let link of links) {
    keyboard.push([Markup.urlButton(link["name"], link["url"])]);
  }
  return Markup.inlineKeyboard(keyboard);
};

exports.contribute = Markup.inlineKeyboard([
  [Markup.urlButton(`Contribute!`, `https://github.com/4bis1/senpai`)],
  [Markup.urlButton(`Organisation`, `https://github.com/4bis1/`)],
]);

exports.timetable = Markup.inlineKeyboard([
  [
    Markup.urlButton(
      `Intranet Timetable`,
      `https://intranet.wiut.uz/TimeTableNew/GetLessons?classid=3AD620ED9D52D489`
    ),
  ],
]);
