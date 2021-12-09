const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "pfp",
    description: "Lekéri a sajátod / más profilképét.",
    category: "💫 Információk",
    usage: "pfp <felhasználó>",
    permission: "",
    aliases: ["profilkep", "avatar"],
    run: async(client, message, args) => {
        let ember = message.mentions.members.first()
        let embedd = new MessageEmbed()
        .setTitle(message.guild.name + " | " + message.author.username)
        .setColor("BLUE")
        .setImage(message.author.displayAvatarURL())
        .setFooter(client.user.username, client.user.displayAvatarURL())
        if(!args[0]) return message.channel.send(embedd)
        if(ember) {
            let embed = new MessageEmbed()
            .setTitle(message.guild.name + " | " + ember.user.username)
            .setColor("BLUE")
            .setImage(ember.user.displayAvatarURL({dynamic : true}))
            .setFooter(client.user.username, client.user.displayAvatarURL())
            message.channel.send(embed)
        }
    }
}