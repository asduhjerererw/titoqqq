const {MessageEmbed} = require('discord.js')
module.exports = {
    name: "spongebob",
    description: "Spongyabob Kockanadrág",
    aliases: ["spongyabob"],
    permission: "",
    category: "📸 képek",
    usage: "spongebob <szöveg>",
    run: async(client, message, args) => {
        let ember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        let szoveg = args[0]
        if(!szoveg) return message.channel.send(">>spongebob <szöveg>")
        let embed = new MessageEmbed()
        .setColor("BLUE")
        .setImage(encodeURI
        (`https://api.devs-hub.xyz/spongebob-timecard?text=${args.join(" ")}`))
        message.channel.send(embed)
    }
}
