const { composer, middleware } = require("../../core/bot");

const consoles = require("../../layouts/consoles");
const message = require("../../layouts/messages");
const keyboard = require("../../layouts/keyboards");

composer.start(async (ctx) => {
	await ctx.replyWithHTML(message.start, {
		parse_mode: "HTML",
		reply_markup: keyboard.start,
	});
});

middleware(composer);
consoles.module(__filename);
