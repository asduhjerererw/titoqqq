const {MessageEmbed} = require('discord.js')

module.exports = {
    name: "setnickname",
    description: "Becenév kezelése.",
    category: "⚡️ Moderáció",
    permission: "MANAGE_GUILD",
    usage: "setnickname <felhasználó> <nickname>",
    aliases: ["becenev", "setnick"],
    run: async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_GUILD")) return message.delete()
        let ember = message.mentions.members.first();
        let becenev = args.slice(1).join(" ")
        if(!args[0]) return message.channel.send("setnickname <felhasználó> <nickname>")
        if(!ember) return message.channel.send("Kérlek tagelj be egy felhasználót!")
        if(!args[1]) return message.chanel.send("setnickname <felhasználó> <nickname>")
        if(!becenev) return message.channel.send("Kérlek adj meg egy becenevet!")
        try {
            ember.setNickname(becenev)
        } catch {
            message.channel.send("Nekem erre nincs engedélyem!")
        }
        message.channel.send(`**${ember}** beceneve sikeresen átállítva erre: **${becenev}**. Itt: **${message.guild.name}**`)
    }
}