const { Random } = require('something-random-on-discord')
const { MessageEmbed } = require('discord.js')
const random = new Random()
module.exports = {
    name: "pat",
    description: "Adj egy simogatást",
    aliases: ["simgatas"],
    permission: "",
    category: "📸 képek",
    usage: "pat <felhasználó>",
    run: async(client, message, args) => {
        let data = await random.getAnimeImgURL("pat")
        let ember = message.mentions.members.first()
        if(!args[0]) return message.channel.send(">>pat <felhasználó>")
        if(!ember) return message.channel.send("Kérlek valaki tagelj meg")
        if(message.author.id === ember.id) return message.channel.send("magadat megsimogatni xd")
        let embed = new MessageEmbed()
        .setColor("BLUE")
        .setImage(data)
        .setDescription(`**${message.author.tag}** éppen megsimogatja **${ember.user.tag}**-t.`)
        message.channel.send(embed)
    }
}
