const {MessageEmbed} = require('discord.js')
module.exports = {
    name: "like",
    description: "Igen",
    aliases: ["like"],
    permission: "",
    category: "📸 képek",
    usage: "like <felhasználó>",
    run: async(client, message, args) => {
        let ember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!ember) return message.channel.send(">>like <felhasználó>")
        let embed = new MessageEmbed()
        .setColor("BLUE")
        .setImage(encodeURI
        (`https://api.devs-hub.xyz/like?image=${ember.user.displayAvatarURL({ format: "png" })}`))
        message.channel.send(embed)
    }
}
