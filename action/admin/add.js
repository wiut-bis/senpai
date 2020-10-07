const { composer, middleware } = require("../../core/bot");

const consoles = require("../../layouts/consoles");
const security = require("../security");
const database = require("../../database/db");

composer.hears(/\/add (.+)/gi, async (ctx) => {
	await security(ctx, async () => {
		await database.users["temporary"].push(ctx.match[1]);
		await ctx.replyWithHTML(`<b>Successfully added a temporary admin!</b>`);
	});
});

composer.hears(/\/add/, async (ctx) => {
	await security(ctx, async () => {
		await ctx.replyWithHTML(
			`<b>Adding temporary admins:</b>` +
				`\n` +
				`<code>/add &lt;id&gt;</code>` +
				`\n` +
				`\n` +
				`<b>Example:</b>` +
				`\n` +
				`<code>/add 123456789</code>`,
			{
				parse_mode: "HTML",
			}
		);
	});
});

middleware(composer);
consoles.module(__filename);
