const {MessageEmbed} = require('discord.js')

module.exports = {
    name: "slowmode",
    description: "Lassított mód kezelése.",
    category: "⚡️ Moderáció",
    permission: "ADMINISTRATOR",
    usage: "slowmode <érték>",
    aliases: ["lassitottmod"],
    run: async(client, message, args) => {
        const amount = parseInt(args[0]);
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.delete()
        if(!args[0]) return message.channel.send(">>slowmode <érték>")
        if(isNaN(amount)) return message.channel.send("Kérlek adj meg egy valós számot!")
        if(args[0] == amount) return message.channel.send("Beállítható argumentumok:\nMásodperc: s\nPerc: min/m")
        if(args[0] == amount + "s") {
            message.channel.setRateLimitPerUser(amount)
            message.channel.send(`Lassított mód bekapcsolva itt: **${message.channel.name}**\nEnnyi időre: **${amount} másodperc**`)
            return;
        }
        if(args[0] == amount + "min" || "m") {
            message.channel.setRateLimitPerUser(amount * 60 + 4)
            message.channel.send(`Lassított mód bekapcsolva itt: **${message.channel.name}**\nEnnyi időre: **${amount} perc**`)
            return;
        } 
    } 
}