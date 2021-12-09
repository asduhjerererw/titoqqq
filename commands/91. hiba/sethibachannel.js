const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "sethibachannel",
    description: "Hiba szoba beállítása",
    aliases: ["sethiba"],
    permission: "",
    category: "⚠️ Hiba",
    usage: "sethibachannel <csatorna>",
    run: async(client, message, args) => {
        if (!message.member.hasPermission("ADMINSTRATOR")) return message.delete()
        let Channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);

        if (!Channel) return message.channel.send(`Kérlek jelölj meg egy csatornát!`);

        if (Channel.type === "voice") return message.channel.send(`Kérlek egy íráson alapuló csatornát válassz!`);

        await db.set(`suggestion_${message.guild.id}`, Channel.id);

        let Embed = new MessageEmbed()
        .setColor("BLUE")
        .setDescription(`Sikeres csatorna beállítás (<#${Channel.id}>)`)

        return message.channel.send(Embed);
    }
}