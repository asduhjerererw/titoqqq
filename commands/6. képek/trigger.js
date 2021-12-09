const {MessageEmbed} = require('discord.js')
module.exports = {
    name: "trigger",
    description: "Trigger",
    aliases: ["meghalt"],
    permission: "",
    category: "📸 képek",
    usage: "trigger <felhasználó>",
    run: async(client, message, args) => {
        let ember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!ember) return message.channel.send(">>trigger <felhasználó>")
        let embed = new MessageEmbed()
        .setColor("BLUE")
        .setImage(encodeURI
        (`https://api.devs-hub.xyz/trigger?image=${ember.user.displayAvatarURL({ format: "png" })}`))
        message.channel.send(embed)
    }
}
