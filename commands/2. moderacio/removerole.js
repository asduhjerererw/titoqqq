const { MessageEmbed, DiscordAPIError } = require("discord.js");
const db = require('quick.db')
module.exports = {
  name: "removerole",
  description:
    "Rang elvevés",
  aliases: ["rangelveves", "rangremove"],
  permission: "MANAGE_ROLES",
  usage: "removerole <rang> <felhasználó>",
  category: "⚡️ Moderáció",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.delete()
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("Zeusnak nincs joga ehhez.");
    
    if (!args[0]) return message.channel.send(">>removerole <rang> <felhasználó>")

    let rMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (!rMember) return message.channel.send("Kérlek írj be egy felhasználót!");
    if (rMember.roles.highest.comparePositionTo(message.guild.me.roles.highest) >= 0) return message.channel.send('Nem lehet ezt a rangot ehhez a felhasználóhoz adni!')

    let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1])
    if (!args[1]) return message.channel.send(">>removerole <rang> <felhasználó>")

    if (!role) return message.channel.send("Kérlek írj be egy rangot!")

    if (role.managed) return message.channel.send("Nem lehet ezt a rangot ehhez a felhasználóhoz adni!")

    if (!rMember.roles.cache.has(role.id)) return message.channel.send("A felhasználónak nincs ilyen rangja!")
    if (rMember.roles.cache.has(role.id)) await rMember.roles.remove(role.id);
    message.channel.send("Sikeresen elvettem a rangot. " + `((${role} | ${rMember.user.tag}))`)
}
};
