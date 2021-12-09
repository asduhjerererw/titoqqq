module.exports = {
    name: "flip",
    description: "Fej vagy írás",
    aliases: ["penzdobas"],
    permission: "",
    category: "👹 fun",
    usage: "flip",
    run: async(client, message, args) => {
        let szovegek = [
            "Fej",
            "Írás"
        ]
        let kiszamolas = Math.floor(Math.random() * szovegek.length)
        message.channel.send(`**${szovegek[kiszamolas]}**`)
    }
}
