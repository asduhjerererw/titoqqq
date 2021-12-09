const Discord = require('discord.js')
module.exports = {
    name: "penis",
    description: "Pénisz méret",
    aliases: ["pp", "pénisz"],
    usage: "penis <felhasználó>",
    category: "👹 fun",
    permission: "",
    run: async(client, message, args) => {
        let penisztablazat = [
            "<=D",
            "<==D",
            "<===D",
            "<=====D",
            "<======D",
            "<=======D",
            "<========D",
            "<=========D",
            "<==========D",
        ]
        let peniszkiszamolasa = Math.floor(Math.random() * penisztablazat.length)
        let ember = message.mentions.members.first()
        if(ember) {
            let embed = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setTitle(`${ember.user.tag} pénisz mérete`)
            .setDescription(`**${penisztablazat[peniszkiszamolasa]}**`)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            message.channel.send(embed)
        } else {
            let embed2 = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setTitle(`${message.author.tag} pénisz mérete`)
            .setDescription(`**${penisztablazat[peniszkiszamolasa]}**`)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            message.channel.send(embed2)
        }
    }
}