const {MessageEmbed } = require('discord.js')
const moment = require('moment')
module.exports = {
    name: "whois",
    description: "Ha kiváncsi vagy valakire, ez a parancs segíthet.",
    aliases: ["kiaz"],
    permission: "",
    category: "💫 Információk",
    usage: "whois <felhasználó>",
    run: async(client, message, args) => {
        let ember = message.mentions.members.first()
        if(!args[0]) return message.channel.send(">>whois <felhasználó>")
        if(!ember) return message.channel.send("Kérlek tagelj be egy felhasználót!")
        let badges = await ember.user.flags
        badges = await badges ? badges.toArray() : ["Nincs"]
    
        let newbadges = [];
        badges.forEach(m => {
          newbadges.push(m.replace("_", " "))
        })
        if(ember.user.bot === false) {
            ember.user.bot = "Nem"
        } else if(ember.user.bot === true) {
            ember.user.bot = "Igen"
        }
        if(ember.deleted === false) {
            ember.deleted = "Nem"
        } else if(ember.deleted === true) {
            ember.deleted = "Igen"
        }
        let embed = new MessageEmbed()
        .setColor("BLUE")
        .setTitle(ember.user.tag)
        .addField("Csatlakozott", moment(ember.joinedAt).format("LLLL"))
        .addField("Fiók létrehozva", moment(ember.user.createdAt).format("LLLL"))
        .addField("Alap információk", `Bot: ${ember.user.bot}\nID: ${ember.user.id}\nHashtag: ${ember.user.discriminator}\nTörölt: ${ember.deleted}`)
        .addField("Jelvények", `${newbadges.join(", ").toLowerCase() || "Nincs"}`)
        .setFooter(client.user.username, client.user.displayAvatarURL())
        message.channel.send(embed)
    }
}