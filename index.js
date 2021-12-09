const { default_prefix } = require("./config.json")
const fetch = require("node-fetch");
const db =require("quick.db");
const { emotes , emoji} =require("./config.json")
const discord = require("discord.js");
const client = new discord.Client({
  disableEveryone: false
});
const fs = require('fs')

const { ready } = require("./handlers/ready.js")
client.commands = new discord.Collection();
client.aliases = new discord.Collection();
const yts = require('yt-search')

client.queue = new Map();
client.vote = new Map();
client.queue = new Map()

const { Player } = require("discord-music-player");
const player = new Player(client, {
    leaveOnEmpty: false,
});

client.player = player;

new Player(client, {
    leaveOnEnd: true,
    leaveOnStop: true,
    leaveOnEmpty: true,
    timeout: 10,
    volume: 150,
    quality: 'high',
});

process.on('unhandledRejection', console.error);
["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});
client.on("ready", () => {
  client.user.setActivity(">>segitseg", { type: "WATCHING"})
});

  
client.on("message", async message => {
 

  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(default_prefix)) return;
  if (!message.member)
    message.member = message.guild.fetchMember(message);
  const args = message.content
    .slice(default_prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let command = client.commands.get(cmd);

  if (!command) command = client.commands.get(client.aliases.get(cmd));

  if (command) command.run(client, message, args);
  if(!message.member.hasPermission("ADMINISTRATOR")) {
}
  
});


client.on("message", async message => {
if (message.channel.name == "chatbot") {
if (message.author.bot) return;
}})

client.on("message", async message => {
  if(!message.member.hasPermission("ADMINISTRATOR")) {
    if(message.content.includes("discord.gg/") || message.content.includes("discordapp.com/invite/")) {
      message.delete()
      message.channel.send(`**${message.author.tag}** küldött egy invitet.\nSzerver: **${message.guild.name}**\nSzoba: **${message.channel.name}**`)
    }
  }
})

client.login(process.env.BOT_TOKEN);
