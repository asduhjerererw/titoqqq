const { MessageEmbed, DiscordAPIError } = require("discord.js");

module.exports = {
  name: "bejelentes",
  description:
    "Bejelentés.",
  aliases: ["announcement"],
  usage: "bejelentes <szoveg>",
  permission: "ADMINISTRATOR",
  category: "⚡️ Moderáció",
  run: async (client, message, args) => {
    if(message.member.hasPermission("ADMINISTRATOR")) {
        if(args[0]) {
        message.channel.send(args.join(" ") + `\n\n\n**- ${message.author.tag}**`)
        } else {
            message.channel.send("Írj ki valamilyen szöveget")
        } 
    } else {
        message.delete()
    }

  }
};
