const {MessageEmbed} = require('discord.js')
module.exports = {
    name: "punch",
    description: "Üss meg valakit",
    aliases: ["utes"],
    permission: "",
    category: "📸 képek",
    usage: "punch <felhasználó>",
    run: async(client, message, args) => {
        let ember = message.mentions.members.first()
        let szovegek = [
            `megütötte **${ember.user.tag}**-t`,
            `beütötte a dinoszaurusz fejét **${ember.user.tag}**-nek/nak`,
            `Szarni rá egy 19mm-es Glockal fejbe lőtte **${ember.user.tag}**-et minek ide box?`,
        ]
        let reakcio = Math.floor(Math.random() * szovegek.length)
        let image = "https://images-ext-1.discordapp.net/external/fycaDtw1CXP-97zF7F1VdmO-PrIDxiSsOcJtszmwyjQ/https/neko-love.xyz/v1/punch/neko-love-punch_2.gif"
        if(!ember) return message.channel.send("Kérlek tagelj be valakit.")
        if(!args[0]) return message.channel.send(">>punch <felhasználó>")
        if(message.author.id == ember.id) return message.channel.send("megütötted magad vicces volt xd")
        let embed = new MessageEmbed()
        .setColor("BLUE")
        .setImage(image)
        .setDescription(`**${message.author.tag}** ${szovegek[reakcio]}`)
        message.channel.send(embed)
    }
}
