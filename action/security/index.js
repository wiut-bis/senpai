const database = require("../../database/db");
const message = require("../../layouts/messages");
const keyboard = require("../../layouts/keyboards");

module.exports = async (ctx, func) => {
	if (
		database.users["eternal"].includes(ctx.from.id) ||
		database.users["temporary"].includes(ctx.from.username)
	) {
		await func();
	} else {
		await ctx.replyWithHTML(message.error_admin, {
			parse_mode: "HTML",
			reply_markup: keyboard.error_admin,
		});
	}
};
