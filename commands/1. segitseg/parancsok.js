const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "parancsok",
  description:
    "Parancs lista",
  aliases: ["commands", "parancsok"],
  usage: "parancsok <parancs>",
  category: "💫 Információk",
  run: async (client, message, args) => {
    
    if (args[0]) {
      const command = await client.commands.get(args[0]);

      if (!command) {
        return message.channel.send("Nincs ilyen parancs");
      }

      let embed = new MessageEmbed()
        .setAuthor(command.name, client.user.displayAvatarURL())
        .addField(">> Leírás", command.description || "Nincs leírás")
        .addField(">> Használat", "`" + command.usage + "`" || "Nincs leírás")
        .addField(">> Aliaszok", command.aliases || "Nincs aliasz")
        .addField(">> Engedély", command.permission || "Nem kell engedély")
        .setThumbnail(client.user.displayAvatarURL())
        .setColor("BLUE")
        .setFooter(client.user.username, client.user.displayAvatarURL());

      return message.channel.send(embed);
    } else {
      
      const commands = await client.commands;

      let emx = new MessageEmbed()
        .setDescription('**Zeus Discord bot**')
  
        .setColor("BLUE")
        .setFooter("Egyéb segítséghez: >>parancsok [parancs]" + " | " + client.user.username, client.user.displayAvatarURL())
        
        .setThumbnail(client.user.displayAvatarURL());
          
      let com = {};
      for (let comm of commands.array()) {
        let category = comm.category || "Ismeretlen";
        let name = comm.name;

        if (!com[category]) {
          com[category] = [];
        }
        com[category].push(name);
      }

      for(const [key, value] of Object.entries(com)) {
        let category = key;

        let desc = "`" + value.join("`, `") + "`";

        emx.addField(`${category.toUpperCase()} - ${value.length}`, desc);
      }
      return message.channel.send(emx)

    }
  }
};
