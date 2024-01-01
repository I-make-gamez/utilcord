import axios from "axios";
import user from "../../database/schemas/user";
import { DISCORDAPIURL } from "../../utils/constants";
import { PartialGuild } from "../../utils/types";
import { getUserInfoService } from "../users/usersService";

export function getBotGuildsService() {
  return axios.get<PartialGuild[]>(`${DISCORDAPIURL}/users/@me/guilds`, {
    headers: {
      Authorization: `Bot ${process.env.TOKEN}`,
    },
  });
}

export async function getUserGuildsService(id: string) {
  const member = await user.findById(id);
  if (!member) throw new Error("No user found");
  return axios.get<PartialGuild[]>(`${DISCORDAPIURL}/users/@me/guilds`, {
    headers: {
      Authorization: `Bearer ${member.accessToken}`,
    },
  });
}

export async function getMutualGuildsService(id: string) {
  const member = await user.findById(id);
  const { data: botGuilds } = await getBotGuildsService();
  const { data: userGuilds } = await getUserGuildsService(id);
  const guildMember: Object = await getUserInfoService(member.Id);

  const adminUserGuilds = userGuilds.filter(
    ({ permissions }) => (parseInt(permissions) & 0x2000) === 0x2000
  );

  const finalGuild: Object = adminUserGuilds[0];

  const userData = {
    guildMember,
    finalGuild,
  };
  return userData;
}
