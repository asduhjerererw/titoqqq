const { Random } = require('something-random-on-discord')
const { MessageEmbed } = require('discord.js')
const random = new Random()
module.exports = {
    name: "hug",
    description: "Adj egy ölelést nosikának",
    aliases: ["oleles"],
    permission: "",
    category: "📸 képek",
    usage: "hug <felhasználó>",
    run: async(client, message, args) => {
        let data = await random.getAnimeImgURL("hug")
        let ember = message.mentions.members.first()
        if(!args[0]) return message.channel.send(">>hug <felhasználó>")
        if(!ember) return message.channel.send("Kérlek valaki tagelj meg")
        if(message.author.id === ember.id) return message.channel.send("magadat megölelni xd")
        let embed = new MessageEmbed()
        .setColor("BLUE")
        .setImage(data)
        .setDescription(`**${message.author.tag}** éppen megöleli **${ember.user.tag}**-t.`)
        message.channel.send(embed)
    }
}
