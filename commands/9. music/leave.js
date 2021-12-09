const {MessageEmbed } = require('discord.js')
module.exports = {
    name: "leave",
    description: "Kilép a csatornából",
    category: "🎵 Zene",
    permission: "",
    aliases: ["kilepes"],
    usage: "leave",
    run: async(client, message, args) => {
        const voiceChannel = message.member.voice.channel;
        const embed = new MessageEmbed()
        .setColor('BLUE')
        .setDescription(`Neked voice csatornában kell lenned ahhoz hogy tudd használni ezt a parancsot!`)
        if(!voiceChannel) return message.channel.send(embed)
        voiceChannel.leave()
        message.react('⛈️')
    }
}