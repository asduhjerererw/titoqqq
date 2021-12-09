const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "unmute",
    description: "Felhasználók némításának feloldása",
    aliases: ["nemitasfeloldas"],
    permission: "MANAGE_ROLES",
    category: "⚡️ Moderáció",
    usage: "unmute <felhasználó> <rang>",
    run: async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.delete()
        let ember = message.mentions.members.first()
        let role = message.mentions.roles.first()
        if(!args[0]) return message.channel.send(">>unmute <felhasználó> <rang>")
        if(!ember) return message.channel.send("Tagelj be egy felhasználót!")
        if(!args[1]) return message.channel.send(">>unmute <felhasználó> <rang>")
        if(!role) return message.channel.send("Kérlek adj meg egy rangot!")
        if(ember && role) {
            if(!ember.roles.cache.has(role.id)) {
                message.channel.send("Neki nincs ilyen rangja!")
            }
            else {
            ember.roles.remove(role.id)
            message.channel.send(`Sikeresen fel lett oldva a némítása ${ember.user.tag}-nak/nek.\nRang levéve: ${role}`)
            }
        }
    }
}