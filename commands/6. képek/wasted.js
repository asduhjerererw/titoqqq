const {MessageEmbed} = require('discord.js')
module.exports = {
    name: "wasted",
    description: "Ehhez nem fűzök semmit",
    aliases: ["wasted"],
    permission: "",
    category: "📸 képek",
    usage: "wasted <felhasználó>",
    run: async(client, message, args) => {
        let ember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!ember) return message.channel.send(">>wasted <felhasználó>")
        let embed = new MessageEmbed()
        .setColor("BLUE")
        .setImage(encodeURI
        (`https://api.devs-hub.xyz/wasted?image=${ember.user.displayAvatarURL({ format: "png" })}`))
        message.channel.send(embed)
    }
}
