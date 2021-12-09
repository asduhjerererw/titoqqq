module.exports = {
    name: "ping",
    description: "Ping",
    aliases: ["latency"],
    permission: "",
    category: "💫 Információk",
    usage: "ping",
    run: async(client, message, args) => {
        const apilatency = Math.round(client.ws.ping)
        message.channel.send(`API Latency: **${apilatency}**`)
        
    }
}