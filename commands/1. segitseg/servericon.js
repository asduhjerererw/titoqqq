const {MessageEmbed} = require('discord.js')

module.exports = {
    name: "servericon",
    description: "Az adott szerveren, ahol lefut ez a parancs ott lekéri a szervernek a képét.",
    aliases: ["sicon"],
    category: "💫 Információk",
    usage: "servericon",
    permission: "",
    run: async(client, message, args) => {
        let embed = new MessageEmbed()
        .setColor("BLUE")
        .setTitle(message.guild.name)
        .setImage(message.guild.iconURL())
        .setFooter(client.user.username, client.user.displayAvatarURL())
        message.channel.send(embed)
    }
}