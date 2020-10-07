const { composer, middleware } = require("../../core/bot");
const env = require("../../core/env");

const consoles = require("../../layouts/consoles");
const security = require("../security");

composer.command("chat", async (ctx) => {
	await security(ctx, async () => {
		await ctx
			.replyWithHTML(
				`<b>Don't let it flop:</b> <code>${ctx.chat.id}</code>`
			)
			.catch(async () => {
				await ctx.replyWithHTML(
					`<b>Permission not given for channel/group!</b>`
				);
			});
	});
});

middleware(composer);
consoles.module(__filename);
