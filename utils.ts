import { Message } from "https://deno.land/x/telegram_bot_api/mod.ts";

export const isPrivateMessage = (message: Message) => message.chat.type === 'private';