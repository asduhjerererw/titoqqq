const { Random } = require('something-random-on-discord')
const { MessageEmbed } = require('discord.js')
const random = new Random()
module.exports = {
    name: "slap",
    description: "Üss meg valakit ne hagyd magad",
    aliases: ["pofon"],
    permission: "",
    category: "📸 képek",
    usage: "slap <felhasználó>",
    run: async(client, message, args) => {
        let data = await random.getAnimeImgURL("slap")
        let ember = message.mentions.members.first()
        if(!args[0]) return message.channel.send(">>slap <felhasználó>")
        if(!ember) return message.channel.send("Kérlek valaki tagelj meg")
        if(message.author.id === ember.id) return message.channel.send("magadat megútni xd")
        let embed = new MessageEmbed()
        .setColor("BLUE")
        .setImage(data)
        .setDescription(`**${message.author.tag}** éppen pofon bassza **${ember.user.tag}**-t.`)
        message.channel.send(embed)
    }
}
