const {MessageEmbed} = require('discord.js')
module.exports = {
    name: "truth",
    description: "Igazság.",
    aliases: ["igazsag"],
    permission: "",
    category: "📸 képek",
    usage: "truth <szöveg>",
    run: async(client, message, args) => {
        let ember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        let text = args[0]
        if(!text) return message.channel.send("Kérlek írj valamit!")
        let embed = new MessageEmbed()
        .setColor("BLUE")
        .setImage(encodeURI
        (`https://api.devs-hub.xyz/truth?text=${args.join(" ")}`))
        message.channel.send(embed)
    }
}
