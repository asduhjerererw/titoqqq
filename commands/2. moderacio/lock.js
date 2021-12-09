const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "lock",
    description: "Csatorna zárolása",
    category: "⚡️ Moderáció",
    aliases: ["csatornazarolas", "zarolas"],
    usage: "lock",
    permission: "MANAGE_SERVER, MANAGE_CHANNELS",
    run: async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.delete()
        message.channel.overwritePermissions([
        {
            id: message.guild.id,
            deny: ['SEND_MESSAGES']
        },
        ],)
        message.channel.send(`A szoba zárolva lett!`)
    }
}