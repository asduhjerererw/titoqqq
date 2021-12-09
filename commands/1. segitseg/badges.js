module.exports = {
    name: "badges",
    description: "Jelvények lekérése",
    aliases: ["jelveny"],
    permission: "",
    category: "💫 Információk",
    usage: "badges <felhasználó>",
    run: async(client, message, args) => {
        const ember = message.mentions.users.first() || message.author;
        if(!args[0]) return message.channel.send(">>badges <felhasználó>")
        if(!ember) return message.channel.send("Kérlek tagelj be egy felhasználót!")
        const flags = ember.flags.toArray();
        message.channel.send(`**${ember}** jelvényei: **${flags.join(', ')}**`)
    }
}