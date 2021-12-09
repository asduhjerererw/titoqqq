module.exports = {
    name: "deletechannel",
    description: "Csatorna törlése",
    category: "⚡️ Moderáció",
    permission: "ADMINISTRATOR",
    usage: "deletechannel <csatorna>",
    aliases: ["csatornatorles"],
    run: async(client, message, args) => {
        const channel = message.guild.channels.cache.get(args[0]);
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.delete()
        if(!channel) return message.channel.send("Kérlek nevezz meg egy csatornát!")
        if(!args[0]) return message.channel.send(">>deletechannel <csatorna>")
        channel.delete(channel)
        message.channel.send(`Sikeresen **törölve** lett a csatorna!`)
    }
}