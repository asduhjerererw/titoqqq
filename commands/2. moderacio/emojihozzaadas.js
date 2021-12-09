const Discord = require('discord.js')
const { parse } = require("twemoji-parser");
module.exports = {
    name: "emojihozzaadas",
    description: "Emjoi adás a szerverednek.",
    category: "⚡️ Moderáció",
    permission: "MANAGE_EMOJIS",
    usage: "emojihozzaadas <emoji>",
    aliases: ["emojiadd"],
    run: async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_EMOJIS")) return message.delete()
        const emojis = args.join(" ").match(/<?(a)?:?(\w{2,32}):(\d{17,19})>?/gi)
        if (!emojis) return message.channel.send(`Kérlek írj ide egy emojit!**`);
        emojis.forEach(emote => {
        let emoji = Discord.Util.parseEmoji(emote);
        if (emoji.id) {
      const Link = `https://cdn.discordapp.com/emojis/${emoji.id}.${
       emoji.animated ? "gif" : "png"
}`
            message.guild.emojis.create(
                `${Link}`,
                `${`${emoji.name}`}`
            ).then(em => message.channel.send(em.toString() + " sikeresen hozzáadva a szerverhez!"))    
        }
        })
}
}