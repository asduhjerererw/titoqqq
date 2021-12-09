const {MessageEmbed } = require('discord.js')
module.exports = {
    name: "clear",
    description: "Törli a várólistát",
    category: "🎵 Zene",
    permission: "",
    aliases: ["c"],
    usage: "clear",
    run: async(client, message, args) => {
        const voice_channel = message.member.voice.channel;
        const embed = new MessageEmbed()
        .setColor('BLUE')
        .setDescription(`Neked voice csatornában kell lenned ahhoz hogy tudd használni ezt a parancsot!`)
        const embed1 = new MessageEmbed()
        .setColor('BLUE')
        .setDescription('A várólista törölve lett!')
        if (!voice_channel) return message.channel.send(embed);
        let isDone = client.player.clearQueue(message);
        if(isDone)
            message.channel.send(embed1);
    }
}