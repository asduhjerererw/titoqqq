const { MessageEmbed } = require("discord.js");
const superagent = require("snekfetch");

module.exports = {
    name: "goose",
    description: "Libás képek",
    aliases: ["gyík", "gyik"],
    permission: "",
    category: "🧸 állatok",
    usage: "goose",
    run: async(client, message, args) => {
        superagent.get('https://nekos.life/api/v2/img/goose')
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
