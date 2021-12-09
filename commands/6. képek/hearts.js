const {MessageEmbed} = require('discord.js')
module.exports = {
    name: "hearts",
    description: "Szivek",
    aliases: ["szivek"],
    permission: "",
    category: "📸 képek",
    usage: "hearts <felhasználó>",
    run: async(client, message, args) => {
        let ember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!ember) return message.channel.send(">>hearts <felhasználó>")
        let embed = new MessageEmbed()
        .setColor("BLUE")
        .setImage(encodeURI
        (`https://api.devs-hub.xyz/hearts?image=${ember.user.displayAvatarURL({ format: "png" })}`))
        message.channel.send(embed)
    }
}
