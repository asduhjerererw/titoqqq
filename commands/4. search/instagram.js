const {MessageEmbed} = require('discord.js')
const aixos = require('axios');
const { default: axios } = require('axios');

module.exports = {
    name: 'instagram',
    description: 'Megtudod nézni valakinek az insta profilját',
    usage: 'instagram <felhasználónév>',
    aliases: ["ig"],
    category: '🔎 Keresés',
    permission: '',
    run: async(client, message, args) => {
        if(!args[0]) return message.channel.send("Kérlek írj be egy nevet!")
        let url, response, account, details;
        try {
            url = `https://instagram.com/${args[0]}/?__a=1`
            response = await axios.get(url)
            account = response.data
            details = account.graphql.user
        } catch {
            return message.channel.send("Nem találtam ilyen nevet az instagrammon!")
        }
        const embed = new MessageEmbed()
        .setTitle(`${details.is_verified ? `${details.username} 📷` : ` ${details.username}`} ${details.is_private ? '🔒 (privát)' : ''} `)
        .setDescription(details.biography)
        .setThumbnail(details.profile_pic_url)
        .setColor("BLUE")
        .addFields(
            {
                name: "Összes post:",
                value: details.edge_owner_to_timeline_media.count.toLocaleString(),
                inline: true
            },
            {
                name: "Követők:",
                value: details.edge_followed_by.count.toLocaleString(),
                inline: true
            },
            {
                name: "Követ:",
                value: details.edge_follow.count.toLocaleString(),
                inline: true
            }
        )
    await message.channel.send(embed)
    }
}