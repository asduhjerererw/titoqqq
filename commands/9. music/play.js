const { MessageEmbed, Message } = require('discord.js')
const ytsr = require('ytsr')

module.exports = {
    name: "play",
    description: "Zenét tudsz elindítani",
    category: "🎵 Zene",
    permission: "",
    aliases: ["start", "p"],
    usage: "play <link>",
    run: async(client, message, args) => {
        const voice_channel = message.member.voice.channel;
        const embed = new MessageEmbed()
            .setColor('BLUE')
            .setDescription(`Neked voice csatornában kell lenned ahhoz hogy tudd használni ezt a parancsot!`)
        if (!voice_channel) return message.channel.send(embed);

        if(client.player.isPlaying(message)) {
            let song = await client.player.addToQueue(message, args.join(' '));

            const added = new MessageEmbed()
            .setColor('#85b0d2')
            .setDescription(`**${song.name}** hozzáadva a várólistához!`)


            // If there were no errors the Player#songAdd event will fire and the song will not be null.
            if(song)
                message.channel.send(added);
            return;
        } else {
            let song = await client.player.play(message, args.join(' '));

            const started = new MessageEmbed()
            .setColor('BLUE')
            .setDescription(`Jelenleg megy **${song.name}**`)

            // If there were no errors the Player#songAdd event will fire and the song will not be null.
            if(song)
                message.channel.send(started);
            return;
        }
    }
}