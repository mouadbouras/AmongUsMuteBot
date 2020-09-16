"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bot_events_1 = require("./bot.events");
const discord_js_1 = require("discord.js");
const dotenv_1 = require("dotenv");
const bot = new discord_js_1.Client();
function main() {
    registerBotEvents();
}
function registerBotEvents() {
    let botEvents = new bot_events_1.BotEvents(bot);
    botEvents.registerEvents();
}
dotenv_1.config();
main();
bot.login(process.env.DISCORD_BOT_TOKEN);
//# sourceMappingURL=main.js.map