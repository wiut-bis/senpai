const cron = require("node-cron");
const env = require("../../core/env");
const { composer, middleware } = require("../../core/bot");

const consoles = require("../../layouts/consoles");
const message = require("../../layouts/messages");
const keyboard = require("../../layouts/keyboards");

cron.schedule("* * * * 1", async () => {
  console.log("running a task every minute");
});

middleware(composer);
consoles.module(__filename);
