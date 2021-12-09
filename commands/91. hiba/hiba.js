const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "hiba",
    description: "Ha hibát találtál a szerveren, küldd el.",
    aliases: ["error"],
    permission: "",
    category: "⚠️ Hiba",
    usage: "hiba <üzenet>",
    run: async(client, message, args) => {
        let channel = await db.fetch(`suggestion_${message.guild.id}`);
        if (channel === null) return;
      
      const suggestionQuery = args.join(" ");
      if(!suggestionQuery) return message.reply("Kérlek írj be valamilyen hibát, ha találtál.");
        
      const embed = new MessageEmbed()
             
           .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
           .setDescription(`**${suggestionQuery}**`)
           .setColor("BLUE")
           .setFooter(client.user.username, client.user.displayAvatarURL())
           .setTimestamp();
           
        const done = new MessageEmbed()
           .setDescription(`Sikeresen elküldted az üzenetet!\nÜzenet: **${suggestionQuery}**\nChannel ID: **${channel}**`)
           .setColor("BLUE")
           
        message.channel.send(done)
        
        await message.guild.channels.cache.get(channel).send(embed)
    }
}