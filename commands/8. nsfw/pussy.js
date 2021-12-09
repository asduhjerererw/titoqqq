const { MessageEmbed } = require("discord.js");
const superagent = require('superagent');
module.exports = {
    name: "pussy",
    description: "( ͡° ͜ʖ ͡°)",
    aliases: ["apussy"],
    permission: "",
    category: "🔞 nsfw",
    usage: "pussy",
    run: async(client, message, args) => {
        if (message.channel.nsfw) {
        superagent.get('https://nekos.life/api/v2/img/pussy')
        .end((err, response) => {
            const embed = new MessageEmbed()
            .setColor("BLUE")
            .setImage(response.body.url)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setURL(response.body.url)
            message.channel.send(embed)
            })
        } else {
            message.react("❌")
            let msg = await message.channel.send("Ez nem NSFW szoba!")
            setTimeout(() => {
                msg.delete()
            }, 3000);
        }
    }
}
