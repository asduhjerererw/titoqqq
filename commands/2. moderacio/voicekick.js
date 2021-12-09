const {MessageEmbed} = require('discord.js')

module.exports = {
    name: "voicekick",
    description: "Voice kick",
    category: "⚡️ Moderáció",
    permission: "ADMINISTRATOR",
    usage: "voicekick <felhasználó>",
    aliases: ["vckick"],
    run: async(client, message, args) => {
        const amount = parseInt(args[0]);
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.delete()
        if(!message.mentions.members.first()) return message.channel.send("Kérlek tagelj be egy felhasználót!")
        let { channel } = message.mentions.members.first().voice;
        if(!channel) return message.channel.send("Ez a felhasználó nincs egy voice csatornában sem!")
        message.mentions.members.first().voice.kick()
        message.channel.send("Sikeresen ki lett kickelve a csatornából!")
        message.mentions.members.first().send(`Te kilettél kickelve egy voice csatornából!\nItt: **${message.guild.name}**`)
    } 
}