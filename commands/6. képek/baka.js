const { MessageEmbed } = require("discord.js");
const superagent = require("snekfetch");

module.exports = {
    name: "baka",
    description: "Bakás képek",
    aliases: ["bakaa"],
    permission: "",
    category: "📸 képek",
    usage: "baka",
    run: async(client, message, args) => {
        superagent.get('https://nekos.life/api/v2/img/baka')
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
