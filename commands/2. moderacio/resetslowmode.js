const {MessageEmbed} = require('discord.js')

module.exports = {
    name: "resetslowmode",
    description: "Lassított mód törlése.",
    category: "⚡️ Moderáció",
    permission: "ADMINISTRATOR",
    usage: "resetslowmode",
    aliases: ["lassitottmodtorlese"],
    run: async(client, message, args) => {
        const amount = parseInt(args[0]);
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.delete()
        message.channel.setRateLimitPerUser(0)
        message.channel.send(`Lassított mód törölve itt: **${message.channel.name}**`)
    } 
}