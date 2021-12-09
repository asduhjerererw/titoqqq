const {MessageEmbed} = require('discord.js')
module.exports = {
    name: "grab",
    description: "",
    aliases: ["megfog"],
    permission: "",
    category: "📸 képek",
    usage: "grab <felhasználó>",
    run: async(client, message, args) => {
        let ember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!ember) return message.channel.send(">>grab <felhasználó>")
        let embed = new MessageEmbed()
        .setColor("BLUE")
        .setImage(encodeURI
        (`https://api.devs-hub.xyz/grab?image=${ember.user.displayAvatarURL({ format: "png" })}`))
        message.channel.send(embed)
    }
}
