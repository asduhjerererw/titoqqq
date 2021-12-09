const QRCode = require('qrcode');
const Discord = require('discord.js')
module.exports = {
    name: "qrcode",
    description: "QR kóddá tudsz akármit alkotni.",
    aliases: ["qr"],
    permission: "",
    category: "👹 fun",
    usage: "qrcode <szöveg>",
    run: async(client, message, args) => {
        let indok = args.slice(0).join(" ")
        if(!indok) return message.channel.send("Kérlek adj meg valami szöveget!")
        let image = await QRCode.toBuffer(indok)
        message.channel.send(new Discord.MessageAttachment(image, "QR Kód.png"))
    }
}
