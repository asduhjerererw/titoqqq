const { MessageEmbed } = require('discord.js')
const googleIt = require('google-it')
module.exports = {
    name: "google",
    description: "Googlen keresni valamit is.",
    aliases: ["ggl"],
    permission: "",
    category: "🔎 Keresés",
    usage: "google <keresni kívánt dolog>",
    run: async (client, message, args) => {
        let embed = new MessageEmbed()
        .setColor("BLUE")
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTitle("Google Search")
        if(!args[0]) return message.channel.send("Kérlek írj be valamit hogy rá tudj keresni!")
        googleIt({'query': args.join(' ')}).then(results => {
            results.forEach(function(item, index) { 
                embed.addField((index + 1) + "; " + item.title, "<" + item.link + ">");
            });
            message.channel.send(embed);
        }).catch(e => {
            message.channel.send("Hiba lépett fel.")
        });
    }
}