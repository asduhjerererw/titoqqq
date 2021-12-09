const { Random } = require('something-random-on-discord')
const { MessageEmbed } = require('discord.js')
const random = new Random()
module.exports = {
    name: "cry",
    description: "Valaki nagyon sírhat",
    aliases: ["sírás"],
    permission: "",
    category: "📸 képek",
    usage: "cry",
    run: async(client, message, args) => {
        let data = await random.getAnimeImgURL("cry")

        let embed = new MessageEmbed()
        .setColor("BLUE")
        .setImage(data)
        .setDescription(`**${message.author.tag}** éppen sír. (Nagyon szomorú lehet)`)
        message.channel.send(embed)
    }
}
