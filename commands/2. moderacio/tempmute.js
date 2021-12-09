const { MessageEmbed } = require('discord.js')
const ms = require('ms')
module.exports = {
    name: "tempmute",
    description: "Felhasználók némítása",
    aliases: ["ideiglenesnemitas"],
    permission: "MANAGE_ROLES",
    category: "⚡️ Moderáció",
    usage: "tempmute <felhasználó> <rang> <idő>",
    run: async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.delete()
        let ember = message.mentions.members.first()
        let role = message.mentions.roles.first()
        let ido = parseInt(args[2])
        if(!args[0]) return message.channel.send(">>tempmute <felhasználó> <rang> <idő>")
        if(!ember) return message.channel.send("Tagelj be egy felhasználót!")
        if(!args[1]) return message.channel.send(">>tempmute <felhasználó> <rang> <idő>")
        if(!role) return message.channel.send("Kérlek adj meg egy rangot!")
        if(!args[2]) return message.channel.send(">>tempmute <felhasználó> <rang> <idő>")
        if(isNaN(ido)) return message.channel.send("Kérlek adj meg egy időt!")
        if(ember.roles.cache.has(role.id)) return message.channel.send("Neki már van ilyen rangja!")
        if(args[2] == ido) return message.channel.send("Másodperc: s/second\nPerc: m/minute\nÓra: h/hour\nNap: d/day")
        if(args[2] == ido + "s" || args[2] == ido + "second") {
            ember.roles.add(role.id)
            message.channel.send(`Sikeresen le lett némítva **${ember.user.tag}**.\nRang: **${role}**\nIdő: **${ido} másodperc**`)
            setTimeout(() => {
                ember.roles.remove(role.id)
                message.channel.send(`Sikeresen **${ember.user.tag}** némítása fel lett oldva.\nRang elvéve: **${role}**`)
            }, ido * 1000);
        }
        if(args[2] == ido + "m" || args[2] == ido + "minute") {
            ember.roles.add(role.id)
            message.channel.send(`Sikeresen le lett némítva **${ember.user.tag}**.\nRang: **${role}**\nIdő: **${ido} perc**`)
            setTimeout(() => {
                ember.roles.remove(role.id)
                message.channel.send(`Sikeresen **${ember.user.tag}** némítása fel lett oldva.\nRang elvéve: **${role}**`)
            }, ido * 1000 * 60 + 4);
        }
        if(args[2] == ido + "h" || args[2] == ido + "hour") {
            ember.roles.add(role.id)
            message.channel.send(`Sikeresen le lett némítva **${ember.user.tag}**.\nRang: **${role}**\nIdő: **${ido} óra**`)
            setTimeout(() => {
                ember.roles.remove(role.id)
                message.channel.send(`Sikeresen **${ember.user.tag}** némítása fel lett oldva.\nRang elvéve: **${role}**`)
            }, ido * 1000 * 60 * 60 + 4);
        }
        if(args[2] == ido + "d" || args[2] == ido + "day") {
            ember.roles.add(role.id)
            message.channel.send(`Sikeresen le lett némítva **${ember.user.tag}**.\nRang: **${role}**\nIdő: **${ido} nap**`)
            setTimeout(() => {
                ember.roles.remove(role.id)
                message.channel.send(`Sikeresen **${ember.user.tag}** némítása fel lett oldva.\nRang elvéve: **${role}**`)
            }, ido * 1000 * 60 * 60 * 60 + 4);
        }

    }
}