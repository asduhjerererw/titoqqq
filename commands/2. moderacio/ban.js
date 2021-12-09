const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "ban",
    description: "Személyek bannolása.",
    category: "⚡️ Moderáció",
    aliases: ["serverban"],
    usage: "ban <felhasználó> <indok>",
    permission: "BAN_MEMBERS",
    run: async(client, message, args) => {
        let ember = message.mentions.members.first()
        let indok = args.slice(1).join(" ") || "Nincs indok csatolva."
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.delete()
        if(!args[0]) return message.channel.send(">>ban <felhasználó> <indok>")
        if(!ember) return message.channel.send(">>Kérlek írj be egy felhasználót!")
        if(ember) {
            if(ember.bannable) {
                ember.ban({reason: indok}).then(() => {
                message.channel.send(ember.user.tag + " ki lett tiltva. \nIndok: " + indok)
            })
        }}
        if(ember.id === message.author.id) return message.channel.send("Nem tudod saját magadat kibannolni!")
    }
}