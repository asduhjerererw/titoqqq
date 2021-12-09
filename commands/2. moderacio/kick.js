const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "kick",
    description: "Személyek kickelése.",
    category: "⚡️ Moderáció",
    aliases: ["serverkick"],
    usage: "kick <felhasználó> <indok>",
    permission: "KICK_MEMBERS",
    run: async(client, message, args) => {
        let ember = message.mentions.members.first()
        let indok = args.slice(1).join(" ") || "Nincs indok csatolva."
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.delete()
        if(!args[0]) return message.channel.send(">>kick <felhasználó> <indok>")
        if(!ember) return message.channel.send("Kérlek adj meg egy felhasználót!")
        if(!args[1]) return message.channel.send(">>kick <felhasználó> <indok>")
        if(ember) {
            ember.kick({
                reason: indok
            })
            message.channel.send(`${ember.user.tag} kickelve lett!\nIndok: ${indok}`)
        }
    }
}