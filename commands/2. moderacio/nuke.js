const {MessageEmbed} = require('discord.js')

module.exports = {
    name: "nuke",
    description: "Összes üzenet törlése.",
    category: "⚡️ Moderáció",
    permission: "ADMINISTRATOR",
    usage: "nuke",
    aliases: ["nukechannel"],
    run: async(client, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.delete()
        message.channel.clone().then(channel => {
            channel.setPosition(message.channel.position)
            channel.send('https://i.gifer.com/6Ip.gif')
            channel.send('Törölve lett az összes üzenet!')
          })
          message.channel.delete()
    }
}