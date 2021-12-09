const {MessageEmbed } = require('discord.js')
module.exports = {
    name: "loop",
    description: "Beloopolja neked a zenét.",
    category: "🎵 Zene",
    permission: "",
    aliases: ["loopnow"],
    usage: "loop",
    run: async(client, message, args) => {
        const voice_channel = message.member.voice.channel;
        const embed = new MessageEmbed()
        .setColor('BLUE')
        .setDescription(`Neked voice csatornában kell lenned ahhoz hogy tudd használni ezt a parancsot!`)
        if (!voice_channel) return message.channel.send(embed);
        // Enable repeat mode
        let status = client.player.setQueueRepeatMode(message, true);
        const loop = new MessageEmbed()
        .setColor('BLUE')
        .setDescription(`Mostantól folyamatosan megy a zene.`)
        if(status === null)
        return;
        message.channel.send(loop);
    }
}