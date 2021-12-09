const {MessageEmbed} = require('discord.js')
module.exports = {
    name: "hitler",
    description: "Hitler",
    aliases: ["NémetIsten"],
    permission: "",
    category: "📸 képek",
    usage: "hitler <felhasználó>",
    run: async(client, message, args) => {
        let ember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!ember) return message.channel.send(">>hitler <felhasználó>")
        let embed = new MessageEmbed()
        .setColor("BLUE")
        .setImage(encodeURI
        (`https://api.devs-hub.xyz/hitler?image=${ember.user.displayAvatarURL({ format: "png" })}`))
        message.channel.send(embed)
    }
}
