const {MessageEmbed } = require('discord.js')
module.exports = {
    name: "resume",
    description: "Zene indítása",
    category: "🎵 Zene",
    permission: "",
    aliases: ["zenevissza"],
    usage: "resume",
    run: async(client, message, args) => {
        const voice_channel = message.member.voice.channel;
        const embed = new MessageEmbed()
        .setColor('BLUE')
        .setDescription(`Neked voice csatornában kell lenned ahhoz hogy tudd használni ezt a parancsot!`)
        if (!voice_channel) return message.channel.send(embed);
        let song = client.player.resume(message);
        const resume = new MessageEmbed()
        .setColor('BLUE')
        .setDescription(`**${song.name}** vissza állítva!`)
        if(song)
        message.channel.send(resume);
    }
}