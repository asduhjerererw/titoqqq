const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "tempban",
    description: "Ideiglenes bannolás",
    category: "⚡️ Moderáció",
    aliases: ["ideiglenesbannolas"],
    usage: "tempban <felhasználó> <idő (nap)> <indok>",
    permission: "BAN_MEMBERS",
    run: async(client, message, args) => {
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.delete()
        let ember = message.mentions.members.first()
        let ido = parseInt(args[1])
        let indok = args.slice(2).join(" ") || "Nincs indok csatolva."
        if(!args[0]) return message.channel.send(">>tempban <felhasználó> <idő (nap)> <indok>")
        if(!args[1]) return message.channel.send(">>tempban <felhasználó> <idő (nap)> <indok>")
        if(!ember) return message.channel.send("Kérlek tagelj be egy felhasználót!")
        if(!ido) return message.channel.send("Kérlek adj meg egy valós időt! (1 = 1 nap)")
        try {
            await ember.ban({
                days: ido,
                reason: indok
            })
            message.channel.send(`Sikeresen ki lett tiltva **${ember}**.\nEnnyi időre: **${ido} nap**\nIndok: **${indok}**`)
        } catch {
            console.log(error)
        }
    } 
}