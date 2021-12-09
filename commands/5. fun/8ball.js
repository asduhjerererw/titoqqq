const Discord = require('discord.js')
module.exports = {
    name: "8ball",
    description: "Jósol neked, más ezért pénzt kérne",
    aliases: ["eightball", "joslas"],
    permission: "",
    category: "👹 fun",
    usage: "8ball <szöveg>",
    run: async(client, message, args) => {
        let kerdes = args[0]
        let valaszok = [
            "Az biztos.",
            "Határozottan így van.",
            "Kétségtelenül.",
            "Igen határozottan.",
            "Bízhatsz benne.",
            "Ahogy én látom, igen.",
            "Legvalószínűbb.",
            "Jól látja Zeus, csináld!",
            "Igen.",
            "A jelek azt mondják hogy igen.",
            "A meglátásom elég gyenge ehhez kapcsolatban, próbáld meg újra!",
            "Kérdezd meg újra később!",
            "Jobb ha nem mondom el.",
            "Jelenleg nem látok rá választ.",
            "Koncentrálj és kérdezd újra.",
            "Ne számíts rá.",
            "A válaszom nem.",
            "A forrásaim szerint nem.",
            "Ahogy elnézem, nem.",
            "Nagyon kétséges.",
        ]
        let kiszamolas = Math.floor(Math.random() * valaszok.length);
        
        if(kerdes) {
            let pEmbed = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setTitle(message.guild.name + " | " + "8ball")
            .addField(`Kérdés`, `${args.join(" ")}`)
            .addField(`Válasz`, `${valaszok[kiszamolas]}`)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            message.channel.send(pEmbed)
        } else {
            message.channel.send("Kérlek tegyél fel egy kérdést!")
        }
    }
}