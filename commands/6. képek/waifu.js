const { Random } = require('something-random-on-discord')
const { MessageEmbed } = require('discord.js')
const random = new Random()
module.exports = {
    name: "waifu",
    description: "Anime képek amúgy",
    aliases: ["waifuanime"],
    permission: "",
    category: "📸 képek",
    usage: "waifu <felhasználó>",
    run: async(client, message, args) => {
        let data = await random.getAnimeImgURL("waifu")
        let ember = message.mentions.members.first()
        if(!args[0]) return message.channel.send(">>waifu <felhasználó>")
        if(!ember) return message.channel.send("Kérlek valaki tagelj meg")
        if(message.author.id === ember.id) return message.channel.send("magadat megmutatni xd")
        let embed = new MessageEmbed()
        .setColor("BLUE")
        .setImage(data)
        .setDescription(`**${message.author.tag}** éppen megmutatja hogy néz ki **${ember.user.tag}**.`)
        message.channel.send(embed)
    }
}
