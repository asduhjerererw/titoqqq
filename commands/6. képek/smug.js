const { Random } = require('something-random-on-discord')
const { MessageEmbed } = require('discord.js')
const random = new Random()
module.exports = {
    name: "smug",
    description: "Kielégült arcok",
    aliases: ["kielegules"],
    permission: "",
    category: "📸 képek",
    usage: "smug",
    run: async(client, message, args) => {
        let data = await random.getAnimeImgURL("smug")
        let embed = new MessageEmbed()
        .setColor("BLUE")
        .setImage(data)
        .setDescription(`**${message.author.tag}** éppen kielégül.`)
        message.channel.send(embed)
    }
}
