module.exports = {
    name: "say",
    description: "Tudsz valamit kiiratni a bottal",
    aliases: ["iras"],
    permission: "",
    category: "👹 fun",
    usage: "say <szöveg>",
    run: async(client, message, args) => {
        let indok = args[0]
        if(indok) {
            message.channel.send(`${args.join(" ")}\n\n**${message.author.tag}**`)
        } else {
            message.channel.send(`${message.author.tag} ostoba volt és nem iratott ki semmit velem :d`)
        }
    }
}
