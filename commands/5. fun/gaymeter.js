const {MessageEmbed, MessageReaction} = require('discord.js')
module.exports = {
    name: "gay",
    description: "Mennyire meleg (nagyon)",
    aliases: ["gaymeter", "meleg"],
    permission: "",
    category: "👹 fun",
    usage: "gaymeter <felhasználó>",
    run: async(client, message, args) => {
        let kiszamolas = Math.floor(Math.random() * 100 + 1)
        let embed = new MessageEmbed()
        .setColor("BLUE")
        .setDescription(`${message.author.username} **${kiszamolas}%** meleg`)
        let ember = message.mentions.users.first()
        if(!args[0]) return message.channel.send(embed)
        if(!ember) return message.channel.send("Kérlek tagelj be valakit!")
        let embed2 = new MessageEmbed()
        .setColor("BLUE")
        .setDescription(`${message.author.username} **${kiszamolas}%** meleg`)
        message.channel.send(embed2)
    }
}
