const cron = require("node-cron");
const { Markup } = require("telegraf");
const { composer, middleware, bot } = require("../../core/bot");

const env = require("../../core/env");
const database = require("../../database/db").timetable;
const consoles = require("../../layouts/consoles");
const identifier = require("./identifier");

for (let day of Object.keys(database)) {
	for (let subject of database[day]) {
		cron.schedule(
			`50 ${subject["start"] - 1.0} * * ${day}`,
			async () => {
				const text =
					`<b>⛓ Upcoming Class Notification ⛓</b> \n` +
					`\n` +
					`⚠ <b>10 minutes left</b> for <code>${subject["name"]} ${subject["type"]}</code> class. ` +
					`Please, get ready as soon as possible! ` +
					`You can get to the website by pressing buttons below: `;

				const keyboard = Markup.inlineKeyboard([
					[
						Markup.urlButton(
							`📺 Video Conference`,
							await identifier(subject["acronym"])
						),
					],
				]);

				await bot.telegram
					.sendMessage(env.BIS, text, {
						parse_mode: "HTML",
						reply_markup: keyboard,
					})
					.then(async (message) => {
						await bot.telegram
							.pinChatMessage(env.BIS, message.message_id)
							.catch(null);
					});
			},
			{
				timezone: "Asia/Tashkent",
			}
		);
	}
}

middleware(composer);
consoles.module(__filename);
