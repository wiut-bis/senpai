const colors = require("colors");
const path = require("path");

exports.errors = (error) => {
	console.log("Error occurred while running the app: ".red.bold + error.red);
};

exports.launch = (environment) => {
	console.log(
		"Bot has been started in ".green +
			environment.yellow +
			" environment".green
	);
};

exports.wrongEnv = () => {
	console.log("Bot can't be started due to wrong environment!".red.bold);
};

exports.module = (filename = __filename) => {
	const modules =
		path.dirname(filename).split(path.sep).pop() +
		"/" +
		path.basename(filename, ".js");
	console.log(
		"The module ".yellow.bold +
			modules.yellow +
			" has been loaded...".yellow.bold
	);
};
