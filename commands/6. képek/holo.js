const { MessageEmbed } = require("discord.js");
const superagent = require("snekfetch");

module.exports = {
    name: "holo",
    description: "holos képek",
    aliases: ["holoo"],
    permission: "",
    category: "📸 képek",
    usage: "holo",
    run: async(client, message, args) => {
        superagent.get('https://nekos.life/api/v2/img/holo')
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
