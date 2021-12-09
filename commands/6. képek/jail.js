const {MessageEmbed} = require('discord.js')
module.exports = {
    name: "jail",
    description: "Börtönbe vele",
    aliases: ["jail"],
    permission: "",
    category: "📸 képek",
    usage: "jail <felhasználó>",
    run: async(client, message, args) => {
        let ember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!ember) return message.channel.send(">>jail <felhasználó>")
        let embed = new MessageEmbed()
        .setColor("BLUE")
        .setImage(encodeURI
        (`https://api.devs-hub.xyz/jail?image=${ember.user.displayAvatarURL({ format: "png" })}`))
        message.channel.send(embed)
    }
}
