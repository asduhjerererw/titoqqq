const {MessageEmbed} = require('discord.js')
const database = require('quick.db')

module.exports = {
    name: "warn",
    description: "Emberek figyelmeztetése.",
    category: "⚡️ Moderáció",
    permission: "ADMINISTRATOR",
    usage: "warn <felhasználó> <indok>",
    aliases: ["figyelmeztetes"],
    run: async(client, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.delete()
        let ember = message.mentions.members.first();
        let indok = args.slice(1).join(" ")
        if(!args[0]) return message.channel.send("warn <felhasználó> <indok>")
        if(!ember) return message.channel.send("Kérlek tagelj be egy felhasználót!")
        if(!args[1]) return message.chanel.send("warn <felhasználó> <indok>")
        if(!indok) return message.channel.send("Kérlek adj meg egy indokot!")
        //if(message.author.id === ember.id) return message.channel.send("Nem tudod saját magad figyelmeztetni!")
        let warnings = database.get(`figyelmeztetesek_${message.guild.id}_${ember.id}`)
        if(warnings === null) {
            database.set(`figyelmeztetesek_${message.guild.id}_${ember.id}`, 1)
            message.channel.send(`Figyelmeztetve lett: **${ember}**\nIndok: **${indok}**`)
            ember.send(`Te figyelmeztetve lettél itt: **${message.guild.name}**\nIndok: **${indok}**`)
        } else if(warnings !== null) {
            database.add(`figyelmeztetesek_${message.guild.id}_${ember.id}`, 1)
            message.channel.send(`Figyelmeztetve lett: **${ember}**\nIndok: **${indok}**`)
            ember.send(`Te figyelmeztetve lettél itt: **${message.guild.name}**\nIndok: **${indok}**`)
        }
    }
}