const {MessageEmbed} = require('discord.js')
const database = require('quick.db')

module.exports = {
    name: "removewarn",
    description: "Emberek figyelmeztetésének törlése.",
    category: "⚡️ Moderáció",
    permission: "ADMINISTRATOR",
    usage: "removewarn <felhasználó> <indok>",
    aliases: ["figyelmeztetestorlese"],
    run: async(client, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.delete()
        let ember = message.mentions.members.first();
        let indok = args.slice(1).join(" ")
        if(!args[0]) return message.channel.send("removewarn <felhasználó> <indok>")
        if(!ember) return message.channel.send("Kérlek tagelj be egy felhasználót!")
        if(!args[1]) return message.chanel.send("removewarn <felhasználó> <indok>")
        if(!indok) return message.channel.send("Kérlek adj meg egy indokot!")
        let warnings = database.get(`figyelmeztetesek_${message.guild.id}_${ember.id}`)
        if(warnings === null) {
            message.channel.send(`Neki nincsen figyelmeztetése: **${ember}**`)
        } else if(warnings !== null) {
            database.delete(`figyelmeztetesek_${message.guild.id}_${ember.id}`)
            message.channel.send(`Figyelmeztetése(i) törölve lettek: **${ember}** felhasználónak\nIndok: **${indok}**`)
            ember.send("Figyelmeztetéseid törölve lettek itt: " + `**${message.guild.name}**\nIndok: **${indok}**`)
        }
    }
}