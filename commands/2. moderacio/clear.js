const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "clear",
    description: "Chat törlése",
    aliases: ["purge", "chattorles"],
    permission: "MANAGE_MESSAGES",
    usage: "clear <szám>",
    category: "⚡️ Moderáció",
    run: async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.delete()
        let amount = args[0]
        if(amount) {
            message.channel.bulkDelete(amount)
        } else {return message.channel.send("Írj be egy számot, amennyi üzenetet szeretnél törölni.\n**Figyelem!** +1 üzenet az amit elküldesz.")}
    }
}