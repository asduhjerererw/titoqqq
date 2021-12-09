const {MessageEmbed} = require('discord.js')
module.exports = {
    name: "rip",
    description: "Hopp, ez meghalt",
    aliases: ["meghalt"],
    permission: "",
    category: "📸 képek",
    usage: "rip <felhasználó>",
    run: async(client, message, args) => {
        let ember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!ember) return message.channel.send(">>rip <felhasználó>")
        let embed = new MessageEmbed()
        .setColor("BLUE")
        .setImage(encodeURI
        (`https://api.devs-hub.xyz/rip?image=${ember.user.displayAvatarURL({ format: "png" })}`))
        message.channel.send(embed)
    }
}
