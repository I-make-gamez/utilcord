import createApp from "./utils/createApp";
import "./database";
import { config } from "dotenv";
import {
  ChannelType,
  Client,
  GatewayIntentBits,
  TextChannel,
  Guild,
} from "discord.js";
const client = new Client({
  intents: [GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers],
});

config();

const PORT = process.env.PORT || 3001;

async function main() {
  try {
    const app = createApp();
    app.listen(PORT, () => {
      console.log(`Running on Port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();

export default client;

export async function fetchMainGuild() {
  const g = await client.guilds.fetch(process.env.GUILDID);
  return g;
}

export async function sendMessage(content: string, channel: string) {
  const guild = (await fetchMainGuild()) as Guild;
  const chnl = (await guild.channels.fetch(channel)) as TextChannel;
  await chnl.send(`${content}`);
}

export async function fetchDiscordUser(id: string) {
  const guild = (await fetchMainGuild()) as Guild;
  const member = await guild.members.fetch(id);
  return member.user;
}

client.login(process.env.TOKEN);
