const { MessageEmbed } = require("discord.js");
const superagent = require("superagent");

module.exports = {
    name: "fox",
    description: "Rókás képek",
    aliases: ["roka", "róka"],
    permission: "",
    category: "🧸 állatok",
    usage: "fox",
    run: async(client, message, args) => {
        let {body} = await superagent
        .get('https://randomfox.ca/floof/')
        if(!{body}) return message.channel.send("Hiba lépett fel a kép betöltésekor!")
        let embed = new MessageEmbed()
        .setColor("BLUE")
        .setImage(body.image)
        .setFooter(client.user.username, client.user.displayAvatarURL())
        message.channel.send(embed)
    }
}
