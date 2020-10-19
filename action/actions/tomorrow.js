const { composer, middleware } = require("../../core/bot");

const { Markup } = require("telegraf");

const consoles = require("../../layouts/consoles");
const message = require("../../layouts/messages");
const keyboard = require("../../layouts/keyboards");
const database = require("../../database/db").timetable;

composer.action(/tomorrow_(.+)/gi, async (ctx) => {
	const tomorrowDay = parseInt(ctx.match[1]);

	const tomorrow = async () => {
		let text = `<b>⛓ Timetable for Tomorrow ⛓</b>`;

		for (let subject of database[tomorrowDay]) {
			let subText =
				`\n` +
				`\n` +
				`<b>💠 Name:</b> <i>${subject["name"]}</i> \n` +
				`<b>🌀 Type:</b> <i>${subject["type"]}</i> \n` +
				`<b>👨‍💻 Tutor:</b> <i>${subject["tutor"]}</i> \n` +
				`<b>⏰ Time (start-end):</b> <code>${subject["start"]}-${
					subject["start"] + subject["length"]
				}</code>`;

			text += subText;
		}

		if (database[tomorrowDay][0] === undefined) {
			text +=
				`\n` +
				`\n` +
				`<b>🎉 Feel free to enjoy today, you don't have any classes!</b>`;
		}

		const editLink = `https://github.com/4bis1/senpai/blob/master/database/json/timetable.json`;
		const editString =
			`\n` +
			`\n` +
			`<b>⚠ If you found mistake, please take consider correcting</b> <a href="${editLink}">timetable.json</a> <b>in our repository!</b>`;

		text += editString;

		return text;
	};

	await ctx.editMessageText(await tomorrow(), {
		parse_mode: "HTML",
		reply_markup: Markup.inlineKeyboard([
			[Markup.callbackButton(`◀ Back`, `timetable`)],
			[
				Markup.urlButton(
					`🕸 Webtable`,
					`https://intranet.wiut.uz/TimeTableNew/GetLessons?classid=3AD620ED9D52D489`
				),
			],
		]),
		disable_web_page_preview: true,
	});
});

middleware(composer);
consoles.module(__filename);
