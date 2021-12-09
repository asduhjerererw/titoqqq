const ms = require('ms')
module.exports = {
    name: "uptime",
    description: "Lekéri hogy mennyi ideje megy a bot.",
    category: "💫 Információk",
    usage: "uptime",
    permission: "",
    aliases: ["ut"],
    run: async(client, message, args) => {
        message.channel.send(`**${ms(client.uptime)}**`)
    }
}