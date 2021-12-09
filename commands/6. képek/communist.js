const {MessageEmbed} = require('discord.js')
module.exports = {
    name: "communist",
    description: "Kommunista ország",
    aliases: ["ÉljenekANácik"],
    permission: "",
    category: "📸 képek",
    usage: "communist <felhasználó>",
    run: async(client, message, args) => {
        let ember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!ember) return message.channel.send(">>communist <felhasználó>")
        let embed = new MessageEmbed()
        .setColor("BLUE")
        .setImage(encodeURI
        (`https://api.devs-hub.xyz/communist?image=${ember.user.displayAvatarURL({ format: "png" })}`))
        message.channel.send(embed)
    }
}
