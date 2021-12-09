const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "imagine",
    description: "Képzelj el valamit",
    aliases: ["elkepzeles"],
    permission: "",
    category: "👹 fun",
    usage: "imagine <szöveg>",
    run: async(client, message, args) => {
        let valasz = [
            "nagyon izgatottan próbálja elképzelni",
            "nagyon erőlködik hogy elképzelje",
            "annyira próbálja elképzelni, hogy lassan már igaz is lesz",
            "nézz mögéd! elképzelted, és ott van",
        ];
        let valaszreakcio = Math.floor(Math.random() * valasz.length)
        let szoveg = args[0]
        if(szoveg) {
            let embed = new MessageEmbed()
            .setColor("BLUE")
            .setTitle("Imagine")
            .addField(`Elképzelés`, args.join(" "))
            .addField(`Válasz`, `${valasz[valaszreakcio]}`)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            message.channel.send(embed)
        } else {
            message.channel.send("Azért valamit képzelj is el")
        }
    }
}
