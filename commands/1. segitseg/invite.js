module.exports = {
    name: "invite",
    description: "Bot meghívó",
    aliases: ["botinv", "botinvite"],
    permission: "",
    category: "💫 Információk",
    usage: "invite",
    run: async(client, message, args) => {
        message.channel.send("https://discord.com/api/oauth2/authorize?client_id=914535649690927114&permissions=8&scope=bot")
    }
}