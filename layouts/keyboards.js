const { Markup } = require("telegraf");

exports.start = Markup.inlineKeyboard([
	[Markup.callbackButton("Show more information", "help")],
]);

exports.help = Markup.inlineKeyboard([
	[
		Markup.urlButton(
			"Announcement's Channel",
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

exports.chisel = Markup.inlineKeyboard([
	[Markup.urlButton(`Web Technology`, `https://bis.chisel.uz/wt/`)],
	[
		Markup.urlButton(
			`Computer Science Fundamentals`,
			`https://bis.chisel.uz/csf/`
		),
	],
	[
		Markup.urlButton(
			`Fundamentals of Programming`,
			`https://bis.chisel.uz/fop/`
		),
	],
	[
		Markup.urlButton(
			`Introduction to Statistics and Data Science`,
			`https://bis.chisel.uz/isds/`
		),
	],
	[
		Markup.urlButton(
			`Introduction to Management and Organisational Behavior`,
			`https://bis.chisel.uz/imob/`
		),
	],
]);
