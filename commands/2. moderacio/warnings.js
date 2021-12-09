const {MessageEmbed} = require('discord.js')
const database = require('quick.db')
module.exports = {
    name: "warnings",
    description: "Figyelmeztetések lekérése.",
    category: "⚡️ Moderáció",
    permission: "ADMINISTRATOR",
    usage: "warnings <felhasználó>",
    aliases: ["figyelmeztetesek"],
    run: async(client, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.delete()
        let ember = message.mentions.members.first();
        if(!args[0]) return message.channel.send("warnings <felhasználó>")
        if(!ember) return message.channel.send("Kérlek tagelj be egy felhasználót!")
        try {
            let warnings = database.get(`figyelmeztetesek_${message.guild.id}_${ember.id}`)
            if(warnings === null) {
                warnings = 0;
            }
            message.channel.send(`${ember} figyelmeztetései: **${warnings}**`)
        } catch {
            message.channel.send("Nekem erre nincs engedélyem!")
        }
    }
}