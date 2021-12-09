module.exports = {
    name: "unbanall",
    description: "A szerveren minden kitiltás feloldása.",
    category: "⚡️ Moderáció",
    permission: "ADMINISTRATOR",
    usage: "unbanall",
    aliases: ["serverunbanall"],
    run: async(client, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.delete()
        message.guild.fetchBans().then(bans => {
            bans.forEach(banInfo => {
              message.guild.members.unban(banInfo.user);
            });
            if(bans.size === 0) return message.channel.send("Nincs kitiltott felhasználó a szerveren!")
            message.channel.send(`**${bans.size}** felhasználó kitiltása lett feloldva.`)
          })
    }
}