const { MessageEmbed } = require("discord.js");
const superagent = require('superagent')
module.exports = {
    name: "anal",
    description: "( ͡° ͜ʖ ͡°)",
    aliases: ["aanal"],
    permission: "",
    category: "🔞 nsfw",
    usage: "anal",
    run: async(client, message, args) => {
        if (message.channel.nsfw) {
        superagent.get('https://nekos.life/api/v2/img/anal')
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
