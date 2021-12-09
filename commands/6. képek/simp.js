const {MessageEmbed} = require('discord.js')
module.exports = {
    name: "simp",
    description: "Ki simp?",
    aliases: ["simpp"],
    permission: "",
    category: "📸 képek",
    usage: "simp <felhasználó>",
    run: async(client, message, args) => {
        let ember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!ember) return message.channel.send(">>simp <felhasználó>")
        let embed = new MessageEmbed()
        .setColor("BLUE")
        .setImage(encodeURI
        (`https://api.devs-hub.xyz/simp?image=${ember.user.displayAvatarURL({ format: "png" })}`))
        message.channel.send(embed)
    }
}
