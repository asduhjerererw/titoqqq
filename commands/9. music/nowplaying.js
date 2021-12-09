const {MessageEmbed } = require('discord.js')
module.exports = {
    name: "nowplaying",
    description: "Mi megy most, és hol tart",
    category: "🎵 Zene",
    permission: "",
    aliases: ["mostmegy"],
    usage: "nowplaying",
    run: async(client, message, args) => {
        const voice_channel = message.member.voice.channel;
        const embed = new MessageEmbed()
        .setColor('BLUE')
        .setDescription(`Neked voice csatornában kell lenned ahhoz hogy tudd használni ezt a parancsot!`)
        if (!voice_channel) return message.channel.send(embed);
        let progressBar = client.player.createProgressBar(message, {
            size: 20,
            block: '▆',
            arrow: '♫'
        

            
        });
        let song = await client.player.nowPlaying(message)
        const bar = new MessageEmbed()
        .setColor('BLUE')
        .setTitle(`${song.name}`)
        .setDescription(`Lekérte: **${message.author.tag}**
        \`${progressBar}\``)

        if(progressBar)

        

            
            message.channel.send(bar);
    }
}