const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "mute",
    description: "Felhasználók némítása",
    aliases: ["nemitas"],
    permission: "MANAGE_ROLES",
    category: "⚡️ Moderáció",
    usage: "mute <felhasználó> <rang>",
    run: async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.delete()
        let ember = message.mentions.members.first()
        let role = message.mentions.roles.first()
        if(!args[0]) return message.channel.send(">>mute <felhasználó> <rang>")
        if(!ember) return message.channel.send("Tagelj be egy felhasználót!")
        if(!args[1]) return message.channel.send(">>mute <felhasználó> <rang>")
        if(!role) return message.channel.send("Kérlek adj meg egy rangot!")
        if(ember && role) {
            ember.roles.add(role.id)
            message.channel.send(`Sikeresen le lett némítva ${ember.user.tag}.\nRang: ${role}`)
        }
    }
}