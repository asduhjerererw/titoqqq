const {MessageEmbed} = require('discord.js')
module.exports = {
    name: "dislike",
    description: "Nem",
    aliases: ["dislike"],
    permission: "",
    category: "📸 képek",
    usage: "dislike <felhasználó>",
    run: async(client, message, args) => {
        let ember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!ember) return message.channel.send(">>dislike <felhasználó>")
        let embed = new MessageEmbed()
        .setColor("BLUE")
        .setImage(encodeURI
        (`https://api.devs-hub.xyz/dislike?image=${ember.user.displayAvatarURL({ format: "png" })}`))
        message.channel.send(embed)
    }
}
