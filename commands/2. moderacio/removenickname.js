const {MessageEmbed} = require('discord.js')

module.exports = {
    name: "removenickname",
    description: "Becenév kezelése.",
    category: "⚡️ Moderáció",
    permission: "MANAGE_GUILD",
    usage: "removenickname <felhasználó>",
    aliases: ["rnick"],
    run: async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_GUILD")) return message.delete()
        let ember = message.mentions.members.first();
        if(!args[0]) return message.channel.send("removenickname <felhasználó>")
        if(!ember) return message.channel.send("Kérlek tagelj be egy felhasználót!")
        try {
            ember.setNickname("")
        } catch {
            message.channel.send("Nekem erre nincs engedélyem!")
        }
        message.channel.send(`**${ember}** beceneve sikeresen törölve lett. Itt: **${message.guild.name}**`)
    }
}