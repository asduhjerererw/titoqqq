const {MessageEmbed } = require('discord.js')
module.exports = {
    name: "skip",
    description: "Zene átugrása",
    category: "🎵 Zene",
    permission: "",
    aliases: ["skip"],
    usage: "skip",
    run: async(client, message, args) => {
        const voice_channel = message.member.voice.channel;
        const embed = new MessageEmbed()
        .setColor('BLUE')
        .setDescription(`Neked voice csatornában kell lenned ahhoz hogy tudd használni ezt a parancsot!`)
        if(!client.player.isPlaying(message)) {
        message.channel.send('Nem megy zene, vagy másik csatornában tartózkodik a bot');

        return;
    }

    await client.player.skip(message);

    message.channel.send('Átugorva');
    }
}