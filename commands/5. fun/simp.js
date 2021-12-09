const {MessageEmbed } = require('discord.js')
module.exports = {
    name: "simp",
    description: "Ki mennyire simp?",
    aliases: ["simpp"],
    permission: "",
    category: "👹 fun",
    usage: "simp <felhasználó>",
    run: async(client, message, args) => {
        let ember = message.mentions.members.first()
        let simpszamolo = Math.floor(Math.random() * 99 + 1)
        let noargsembed = new MessageEmbed()
        .setColor("BLUE")
        .setTitle(`**${message.author.tag}** ${simpszamolo}% simp`)
        .setFooter(client.user.username, client.user.displayAvatarURL())
        if(!args[0]) return message.channel.send(noargsembed)
        if(!ember) return message.channel.send("Kérlek tagelj be valakit!")
        if(ember) {
            let embed = new MessageEmbed()
            .setColor("BLUE")
            .setTitle(`**${ember.user.tag}** ${simpszamolo}% simp`)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            message.channel.send(embed)
        }
    }
}
