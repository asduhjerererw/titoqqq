const {MessageEmbed} = require('discord.js')
module.exports = {
    name: "glitch",
    description: "Glitch xd",
    aliases: ["glitchh"],
    permission: "",
    category: "📸 képek",
    usage: "glitch <felhasználó>",
    run: async(client, message, args) => {
        let ember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!ember) return message.channel.send(">>glitch <felhasználó>")
        let embed = new MessageEmbed()
        .setColor("BLUE")
        .setImage(encodeURI
        (`https://api.devs-hub.xyz/glitch?image=${ember.user.displayAvatarURL({ format: "png" })}`))
        message.channel.send(embed)
    }
}
