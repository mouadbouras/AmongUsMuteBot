"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotEvents = void 0;
const tslib_1 = require("tslib");
class BotEvents {
    constructor(bot) {
        this._prefix = '!';
        this.ready = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('This bot is online');
        });
        this.message = (msg) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (msg.author.bot)
                return;
            if (!msg.content.startsWith(this._prefix))
                return;
            if (msg.content.startsWith(`${this._prefix}id`)) {
                this._channel = msg.content.slice(this._prefix.length).split(/ +/)[1];
                return;
            }
            if (!this._channel) {
                msg.channel.send("You need to specify a chat channel id. use '!id'");
                return;
            }
            if (msg.channel.id != this._channel) {
                return;
            }
            if (msg.content.startsWith(`${this._prefix}m`) || msg.content.startsWith(`${this._prefix}u`)) {
                const voiceChannel = msg.member.voice.channel;
                if (!voiceChannel) {
                    msg.channel.send("You need to be in a voice channel!");
                    return;
                }
                const permissions = voiceChannel.permissionsFor(msg.client.user);
                if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
                    msg.channel.send("I need the permissions to join and speak in your voice channel!");
                    return;
                }
                if (msg.content.startsWith(`${this._prefix}m`)) {
                    voiceChannel.members.forEach(m => m.voice.setMute(true, 'shhhh'));
                }
                else {
                    voiceChannel.members.forEach(m => m.voice.setMute(false, 'discussion time'));
                }
            }
            else {
                msg.channel.send("You need to enter a valid command!");
            }
        });
        this._bot = bot;
    }
    registerEvents() {
        this._bot.on('ready', this.ready);
        this._bot.on('message', this.message);
    }
}
exports.BotEvents = BotEvents;
//# sourceMappingURL=bot.events.js.map