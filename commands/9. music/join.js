const {MessageEmbed } = require('discord.js')
module.exports = {
    name: "join",
    description: "Csatlakozó",
    category: "🎵 Zene",
    permission: "",
    aliases: ["j"],
    usage: "join",
    run: async(client, message, args) => {
        const voiceChannel = message.member.voice.channel;
        const embed = new MessageEmbed()
        .setColor('BLUE')
        .setDescription(`Neked voice csatornában kell lenned ahhoz hogy tudd használni ezt a parancsot!`)
        if(!voiceChannel) return message.channel.send(embed)
        voiceChannel.join()
        message.react('⛈️')
    }
}