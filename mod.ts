import { TelegramBot } from "https://deno.land/x/telegram_bot_api/mod.ts";
import { repost } from "./repost.ts";

const TOKEN = Deno.env.get("TOKEN");
if (!TOKEN) throw new Error("Bot token is not provided");
const bot = new TelegramBot(TOKEN);

repost(bot);

const bootstrap = async () => {
  await bot.run({
    polling: true,
  });
};

bootstrap();
