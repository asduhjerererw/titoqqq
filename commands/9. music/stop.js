const {MessageEmbed } = require('discord.js')
module.exports = {
    name: "stop",
    description: "Megállító",
    category: "🎵 Zene",
    permission: "",
    aliases: ["s"],
    usage: "stop",
    run: async(client, message, args) => {
        const voice_channel = message.member.voice.channel;
        const embed = new MessageEmbed()
        .setColor('BLUE')
        .setDescription(`Neked voice csatornában kell lenned ahhoz hogy tudd használni ezt a parancsot!`)
        if (!voice_channel) return message.channel.send(embed);
        let isDone = client.player.stop(message);
        const stop = new MessageEmbed()
        .setColor('BLUE')
        .setDescription('Sikeres megállítás')
        if(isDone)
        message.channel.send(stop);
    }
}