const { MessageEmbed } = require("discord.js");
const superagent = require('superagent')
module.exports = {
    name: "feet",
    description: "( ͡° ͜ʖ ͡°)",
    aliases: ["afeet"],
    permission: "",
    category: "🔞 nsfw",
    usage: "feet",
    run: async(client, message, args) => {
        if (message.channel.nsfw) {
        superagent.get('https://nekos.life/api/v2/img/feet')
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
