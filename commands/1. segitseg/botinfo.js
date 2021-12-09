const {MessageEmbed } = require('discord.js')
const {version: discordjsVersion } = require('discord.js')
const ms = require('pretty-ms')
module.exports = {
    name: "botinfo",
    description: "Bot információ",
    aliases: ["botstat"],
    permission: "",
    category: "💫 Információk",
    usage: "botinfo",
    run: async(client, message, args) => {
        let embed = new MessageEmbed()
        .setColor("BLUE")
        .setTitle("Zeus")
        .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
        .addField("Elérhető", `${ms(client.uptime)}`, true)
        .addField("Ping", `${client.ws.ping}ms`, true)
        .addField("Ennyi szerveren", `${client.guilds.cache.size}`, true)
        .addField("Ennyi embernél", `${message.guild.memberCount}`, true)
        .addField("Parancsok", `${client.commands.size}`, true)
        .addField("Node verzió", `${process.version} | ${process.platform}${process.arch}`, true)
        .addField("Discord.js verzió", `${discordjsVersion}`, true)
        .setTimestamp()
        message.channel.send(embed)
    }
}