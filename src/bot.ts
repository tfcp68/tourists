import {Telegraf} from 'telegraf'
import {message} from 'telegraf/filters'
import {Markup} from 'telegraf'

let BOT_TOKEN: string = "6142394672:AAHlY8ECzs63zUQ2hvJKQx3DXjy3K6x9SLo"

const bot = new Telegraf(BOT_TOKEN);

const MAIN_MENU = Markup.keyboard([
    ['b11', 'bb12'],
    ['b21', 'b22 ', 'b23'],
    ['b31', 'b32'],
    ['b41', 'b42'],
    ['b51', 'b52'],
    ['b61', 'b62'],
]).resize()

bot.command("buttons", async (ctx) => {
    await ctx.reply('BUTTONS', (MAIN_MENU))
})

bot.start((ctx) => ctx.reply('Bot Started'));


bot.command("reply", async (ctx) => {
    await ctx.telegram.sendMessage(ctx.message.chat.id, ctx.message.text.replace('/reply', ''));
})

bot.on(message('text'), async (ctx) => {
    // Using context shortcut
    await ctx.reply(`Echo: ${ctx.message.text}`);
});

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));