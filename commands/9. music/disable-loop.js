const {MessageEmbed } = require('discord.js')
module.exports = {
    name: "disableloop",
    description: "Kikapcsolja a zene loopolásod.",
    category: "🎵 Zene",
    permission: "",
    aliases: ["unloop", "disable-loop", "dl"],
    usage: "disableloop",
    run: async(client, message, args) => {
        const voice_channel = message.member.voice.channel;
        const embed = new MessageEmbed()
        .setColor('BLUE')
        .setDescription(`Neked voice csatornában kell lenned ahhoz hogy tudd használni ezt a parancsot!`)
        if (!voice_channel) return message.channel.send(embed);
        // Enable repeat mode
        let status = client.player.setQueueRepeatMode(message, false);
        const loop = new MessageEmbed()
        .setColor('BLUE')
        .setDescription(`Mostantól nem megy folyamatosan a zene.`)
        if(status === null)
        return;
        message.channel.send(loop);
    }
}