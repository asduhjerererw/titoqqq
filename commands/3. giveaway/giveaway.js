const { MessageEmbed } = require('discord.js')
const ms = require('ms')
module.exports = {
    name: "giveaway",
    description: "Nyereményjáték",
    category: "🏆 Nyereményjáték",
    aliases: ["gw"],
    usage: "giveaway <hányan nyerjenek> <idő> <nyeremény>",
    permission: "MANAGE_ROLES",
    run: async(client, message, args) => {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.delete()
        let ember = args[0]
        let ido = args[1]
        let nyeremeny = args[2]
        if(!args[0]) return message.channel.send(">>giveaway <hányan nyerjenek> <idő> <nyeremény>")
        if(!args[1]) return message.channel.send(">>giveaway <hányan nyerjenek> <idő> <nyeremény>")
        if(!args[2]) return message.channel.send(">>giveaway <hányan nyerjenek> <idő> <nyeremény>")
        ido = ms(ido)
        const embed = new MessageEmbed()
        .setTitle(nyeremeny)
        .setDescription("Reagálj a '🎉' reakcióra hogy részt vegyél a nyereményjátékon!")
        .addField("Részletek", `Nyerhet: **${ember}** felhasználó\nIdő: **${ms(ido, {long: true})}**\nNyeremény: **${nyeremeny}**\nNyereményjáték készítő: **${message.author.username}#${message.author.discriminator}**`)
        .setColor("BLUE")
        .setFooter("Vége lesz")
        .setTimestamp(Date.now() + ido)
        message.delete()
        const e = await message.channel.send(embed)
        e.react("🎉")
        setTimeout(async () => {
            let reactions = await e.reactions.cache.get("🎉").users.fetch()
            reactions = reactions.array().filter(user => user.id != "914535649690927114")
            let w = []
            for(let i = 1; i <= ember; i++) {
                w.push(reactions[Math.floor(Math.random() * reactions.length)])
            }
            message.channel.send(`Nyertes(ek): ${w.join(", ")}\nNyeremény: **${nyeremeny}**`)
        }, ido);
    }
}