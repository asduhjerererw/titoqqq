const {MessageEmbed} = require('discord.js')
module.exports = {
    name: "lgbtq",
    description: "Be vagy szívva?",
    aliases: ["szivarvany", "lgbt", "lgbtq+"],
    permission: "",
    category: "📸 képek",
    usage: "lgbtq <felhasználó>",
    run: async(client, message, args) => {
        let ember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!ember) return message.channel.send(">>lgbtq <felhasználó>")
        let embed = new MessageEmbed()
        .setColor("BLUE")
        .setImage(encodeURI
        (`https://api.devs-hub.xyz/rainbow?image=${ember.user.displayAvatarURL({ format: "png" })}`))
        message.channel.send(embed)
    }
}
