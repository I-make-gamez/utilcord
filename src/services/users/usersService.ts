import { GuildMember } from "discord.js";
import { fetchDiscordUser } from "../..";

export async function getUserInfoService(id: string) {
  return await fetchDiscordUser(id);
}
