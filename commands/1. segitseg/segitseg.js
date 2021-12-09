const { MessageEmbed, DiscordAPIError } = require("discord.js");

module.exports = {
  name: "segitseg",
  description:
    "Ha bajban vagy eléggé hasznos lehet számodra",
  aliases: ["help"],
  usage: "parancsok <parancs>",
  category: "💫 Információk",
  run: async (client, message, args) => {
    let embed = new MessageEmbed()
    .setColor("BLUE")
    .setThumbnail(client.user.displayAvatarURL())
    .addField('PARANCS LISTA', '>>parancsok')
    .addField('SUPPORT SZERVER', 'Hamarosan')
    .setFooter(client.user.username, client.user.displayAvatarURL())
    message.channel.send(embed)
  }
};
