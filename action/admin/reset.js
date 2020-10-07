const { composer, middleware } = require("../../core/bot");

const consoles = require("../../layouts/consoles");
const security = require("../security");
const database = require("../../database/db");

composer.command(`reset`, async (ctx) => {
	await security(ctx, async () => {
		database.users["temporary"] = [];
		await ctx.replyWithHTML(`<b>Temporary admins successfully reset!</b>`, {
			parse_mode: "HTML",
		});
	});
});

middleware(composer);
consoles.module(__filename);
