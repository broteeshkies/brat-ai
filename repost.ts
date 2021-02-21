import { TelegramBot, UpdateType } from "https://deno.land/x/telegram_bot_api/mod.ts";
import { isPrivateMessage } from "./utils.ts";

const BOT_GROUP_ID = Deno.env.get("BOT_GROUP_ID");
if (!BOT_GROUP_ID)
  throw new Error("BOT_GROUP_ID environment variable is not provided");

export const repost = (bot: TelegramBot) => {
  bot.on(UpdateType.Message, async ({ message }) => {
    if (!isPrivateMessage(message)) return;
    if (message.text === "/start") return;

    // For text messages
    if (message.text) {
      await bot.sendMessage({ chat_id: BOT_GROUP_ID, text: message.text });
    }

    // For stickers
    if (message.sticker) {
      await bot.sendSticker({
        chat_id: BOT_GROUP_ID,
        sticker: message.sticker.file_id,
      });
    }

    // For audio
    if (message.audio) {
      await bot.sendAudio({
        chat_id: BOT_GROUP_ID,
        audio: message.audio.file_id,
      });
    }

    // For voice
    if (message.voice) {
      await bot.sendVoice({
        chat_id: BOT_GROUP_ID,
        voice: message.voice.file_id,
      });
    }

    // For photo
    // if (message.photo) {
    //   for (const photo of message.photo) {
    //     await bot.sendPhoto({
    //       chat_id: BOT_GROUP_ID,
    //       photo: photo.file_id,
    //     });
    //   }
    // }
  });
};
