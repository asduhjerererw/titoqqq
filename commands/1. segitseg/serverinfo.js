const { channel } = require('diagnostics_channel');
const {MessageEmbed } = require('discord.js')
const moment = require('moment');
module.exports = {
    name: "serverinfo",
    description: "Szerver információ",
    aliases: ["serverstat", "sinfo"],
    permission: "",
    category: "💫 Információk",
    usage: "serverinfo",
    run: async(client, message, args) => {
        const owner = await message.guild.members.fetch(message.guild.ownerID);
        const members = message.guild.members.cache
        const channels = message.guild.channels.cache
        if(message.guild.explicitContentFilter === "DISABLED") {
            message.guild.explicitContentFilter = ":x:"
        } else if(message.guild.explicitContentFilter === "ENABLED") {
            message.guild.explicitContentFilter = ":white_check_mark:"
        }
        if(message.guild.verificationLevel === "NONE") {
            message.guild.verificationLevel = ":x:"
        } else if(message.guild.verificationLevel === "LOW") {
            message.guild.verificationLevel = ":white_check_mark: (szint 1)"
        } else if(message.guild.verificationLevel === "MEDIUM") {
            message.guild.verificationLevel = ":white_check_mark: (szint 2)"
        } else if(message.guild.verificationLevel === "HIGH") {
            message.guild.verificationLevel = ":white_check_mark: (szint 3)"
        } else if(message.guild.verificationLevel === "VERY_HIGH") {
            message.guild.verificationLevel = ":white_check_mark: (szint 4)"
        }
        if(message.guild.region === "deprecated") {
            message.guild.region = "Elavult"
        }
        let embed = new MessageEmbed()
        .setColor("BLUE")
        .setTitle(":mage: Információk | " + message.guild.name)
        .setThumbnail(message.guild.iconURL())
        .addField("Szerver név", message.guild.name)
        .addField("Tagok", message.guild.memberCount)
        .addField("Tulajdonosi információk", `Tulajdonos: **${message.guild.owner.user.tag}**\nSzerver név: **${message.guild.name}**\nServer ID: **${message.guild.id}**\nBoost szint: **${message.guild.premiumTier ? `Szint ${message.guild.premiumTier}` : 'Nincs'}**`)
        .addField("Egyéb", `Explicit szűrő: **${message.guild.explicitContentFilter}**\nEllenőrzési szint: **${message.guild.verificationLevel}**`)
        .addField("Alap dolgok", `Régió: **${message.guild.region}**\nSzerver létrejött: **${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} ${moment(message.guild.createdTimestamp).fromNow()}**`)
        .addField("Belső információk", `Rangok: **${message.guild.roles.cache.size}** (everyone +1)\nEmojik: **${message.guild.emojis.cache.size}**\nSzöveges csatornák: **${channels.filter(channel => channel.type === 'text').size}**\nHang csatornák: **${channels.filter(channel => channel.type === 'voice').size}**`)
        .setFooter(client.user.username, client.user.displayAvatarURL())
        message.channel.send(embed)
    }
}