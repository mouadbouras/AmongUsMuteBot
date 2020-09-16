import { BotEvents } from './bot.events';
import { Client } from "discord.js";
import { config } from 'dotenv';
//const key = process.env.DISCORD_BOT_TOKEN;
const bot = new Client();

function main(): void {
  registerBotEvents();
  //console.log(BotEvents.ready.toString);
  // Object.keys(BotEvents).forEach(
  //   key => 
  //   { 
  //     console.log(key);
  //     console.log(BotEvents[key]);
  //   }
  // );
  // bot.on('ready', () => { console.log('This bot is online ')} );
  // bot.on('message', (msg: Message) => { 
  //   if(msg.content === "!hello"){
  //     msg.reply('hello Friend')
  //   }
  // });
}

function registerBotEvents() {
  let botEvents = new BotEvents(bot);
  botEvents.registerEvents();
  // Object.keys(botEvents).forEach(key => bot.on(key, botEvents[key]));

  //Object.getOwnPropertyNames(BotEvents.prototype)
  // Object.getOwnPropertyNames(botEvents).forEach(
  //   key => 
  //   { 
  //     console.log(key);
  //     console.log(botEvents[key]);
  //   }
  // );
}


config();
main();
bot.login(process.env.DISCORD_BOT_TOKEN);