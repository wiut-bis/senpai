const { composer, middleware, markup } = require("../../core/bot");

const { Markup } = require("telegraf");

const date = require("../../database/dt");
const consoles = require("../../layouts/consoles");
const message = require("../../layouts/messages");
const keyboard = require("../../layouts/keyboards");
const database = require("../../database/db").timetable;

composer.action(`timetable`, async (ctx) => {
	const currentDay = (await date()).toString();
	const tomorrowDay = ((await date()) + 1).toString();
	const refreshTime = await new Date(
		new Date().getTime() +
			new Date().getTimezoneOffset() * 60000 +
			3600000 * 5
	)
		.toString()
		.replace("GMT+0000 (Coordinated Universal Time)", "")
		.replace("GMT+0500 (Uzbekistan Standard Time)", "");
	const identifier = async (length) => {
		let result = "";
		const characters =
			"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		const charactersLength = characters.length;

		for (let i = 0; i < length; i++) {
			result += characters.charAt(
				Math.floor(Math.random() * charactersLength)
			);
		}

		return result.toUpperCase();
	};

	const timetable = async () => {
		let text = `<b>⛓ Today's Timetable ⛓</b>`;

		for (let subject of database[currentDay]) {
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

		if (database[currentDay][0] === undefined) {
			text +=
				`\n` +
				`\n` +
				`<b>🎉 Feel free to enjoy today, you don't have any classes!</b>`;
		}

		const editTime =
			`\n` +
			`\n` +
			`<b>Last Refresh:</b> <code>${
				refreshTime + (await identifier(5))
			}</code>`;

		const editLink = `https://github.com/4bis1/senpai/blob/master/database/json/timetable.json`;
		const editString =
			`\n` +
			`\n` +
			`<b>⚠ If you found mistake, please take consider correcting</b> <a href="${editLink}">timetable.json</a> <b>in our repository!</b>`;

		text += editTime;
		text += editString;

		return text;
	};
	await ctx.editMessageText(await timetable(), {
		parse_mode: "HTML",
		disable_web_page_preview: true,
		reply_markup: Markup.inlineKeyboard([
			[Markup.callbackButton(`🔁 Refresh`, `timetable`)],

			[Markup.callbackButton(`⌚ Tomorrow`, `tomorrow_${tomorrowDay}`)],

			[
				Markup.urlButton(
					`🕸 Webtable`,
					`https://intranet.wiut.uz/TimeTableNew/GetLessons?classid=3AD620ED9D52D489`
				),
			],
		]),
	});
});

middleware(composer);
consoles.module(__filename);
