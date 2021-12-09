const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "unlock",
    description: "Csatorna zárolásának feloldása",
    category: "⚡️ Moderáció",
    aliases: ["csatornazarolas", "zarolas"],
    usage: "lock <indok>",
    permission: "MANAGE_SERVER, MANAGE_CHANNELS",
    run: async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_SERVER", "MANAGE_CHANNELS")) return message.delete()
        message.channel.overwritePermissions([
        {
            id: message.guild.id,
            accept: ['SEND_MESSAGES']
        },
        ],)
        message.channel.send("A szobának a zárolása fel lett oldva!")
    }
}