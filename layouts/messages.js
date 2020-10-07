exports.start =
	`<b>💜 Welcome to ME 🤗!</b>` +
	`\n` +
	`\n` +
	`I'm just a virtual assistant created by my Father (@genemator) to help group 4BIS1 to give more information and I ` +
	`can help guide you and give more information, notify about events and have a talk ╰(*°▽°*)╯.` +
	`\n` +
	`With my help, you can do:` +
	`\n` +
	`\n` +
	`<code>* Get information about yourself & modules</code>` +
	`\n` +
	`<code>* Get informed about upcoming classes</code>` +
	`\n` +
	`<code>* Check your timetable for today</code>` +
	`\n` +
	`<code>* Leave a feedback to admins</code>` +
	`\n` +
	`\n` +
	`Oni-chan, I hope we can get to know each other 😊` +
	`\n` +
	`\n` +
	`<i>In order to see full detailed usage information of the bot, press the button below.</i>`;

exports.help = (isAdmin) => {
	const base =
		`<b>List of available commands:</b>` +
		`\n` +
		`\n` +
		`/help - <code>show this helper message</code>` +
		`\n` +
		`/stats - <code>check stats of user</code>` +
		`\n` +
		`/links - <code>show url links</code>` +
		`\n` +
		`/timetable - <code>today's timetable</code>` +
		`\n` +
		`/contribute - <code>enhance me more</code>` +
		`\n` +
		`/feedback - <code>leave a feedback to admins</code>`;
	const admin =
		`\n` +
		`\n` +
		`<b>Admin commands:</b>` +
		`\n` +
		`/add - <code>add temporary admin</code>` +
		`\n` +
		`/send - <code>send message to users</code>` +
		`\n` +
		`/reset - <code>reset temporary admin list</code>` +
		`\n` +
		`/list - <code>list temporary admins</code>` +
		`\n` +
		`\n` +
		`<i>Be careful! Restricted for non-admin users.` +
		` Heavily checked and database tested zone</i>`;
	if (isAdmin) {
		return base + admin;
	} else {
		return base;
	}
};

exports.invalid = `<b>This command or message is invalid. Please see our command list for more information!</b>`;

exports.error_admin = `<b>You don't have enough power to do that!</b>`;

exports.invalid_query = `<b>Ehm!</b>`;

exports.links = `<b>Here are 4BIS1's groups & channels:</b>`;

exports.contribute = `<b>I'm so happy that you wanted to upgrade me 😁. Please, press the button below to get to my GitHub repo...</b>`;

exports.chisel = `<b>Choose a module from provided list below to enter Chisel's LMS board:</b>`;
