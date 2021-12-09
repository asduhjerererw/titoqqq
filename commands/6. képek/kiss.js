const { Random } = require('something-random-on-discord')
const { MessageEmbed } = require('discord.js')
const random = new Random()
module.exports = {
    name: "kiss",
    description: "A pornhub jobb",
    aliases: ["csokolozas"],
    permission: "",
    category: "📸 képek",
    usage: "kiss <felhasználó>",
    run: async(client, message, args) => {
        let data = await random.getAnimeImgURL("kiss")
        let ember = message.mentions.members.first()
        if(!args[0]) return message.channel.send(">>kiss <felhasználó>")
        if(!ember) return message.channel.send("Kérlek valaki tagelj meg")
        if(message.author.id === ember.id) return message.channel.send("magadat megcsókolni xd")
        let embed = new MessageEmbed()
        .setColor("BLUE")
        .setImage(data)
        .setDescription(`**${message.author.tag}** éppen megcsókolja **${ember.user.tag}**-t.`)
        message.channel.send(embed)
    }
}
