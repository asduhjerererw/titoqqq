const { MessageEmbed } = require("discord.js");
const superagent = require("snekfetch");

module.exports = {
    name: "gecg",
    description: "holos képek",
    aliases: ["animegecg"],
    permission: "",
    category: "📸 képek",
    usage: "gecg",
    run: async(client, message, args) => {
        superagent.get('https://nekos.life/api/v2/img/gecg')
        .end((err, response) => {
            const embed = new MessageEmbed()
            .setColor("BLUE")
            .setImage(response.body.url)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setURL(response.body.url)
            message.channel.send(embed)
        })
    }
}
