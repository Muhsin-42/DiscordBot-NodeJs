import { Client, GatewayIntentBits } from "discord.js";
import { DISCORD_ACCESS_TOKEN } from "./utils/constants";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
}); // what all permissios to give

client.on("messageCreate", (message) => {
  if (!message.author.bot) {
    message.reply({ content: "Hey from bot 😁" });
    message.react("👍");
  }
});
client.on("interactionCreate", (interaction) => {
  switch (interaction.commandName) {
    case "ping":
      interaction.reply("Pong!");
  }
});

client.login(DISCORD_ACCESS_TOKEN);
