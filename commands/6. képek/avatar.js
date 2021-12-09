const { MessageEmbed } = require("discord.js");
const superagent = require("snekfetch");

module.exports = {
    name: "avatar",
    description: "avatáros képek",
    aliases: ["avatár"],
    permission: "",
    category: "📸 képek",
    usage: "avatar",
    run: async(client, message, args) => {
        superagent.get('https://nekos.life/api/v2/img/avatar')
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
