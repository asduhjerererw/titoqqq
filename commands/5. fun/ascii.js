const figlet = require('figlet')
module.exports = {
    name: "ascii",
    description: "Text font",
    aliases: ["asci"],
    permission: "",
    category: "👹 fun",
    usage: "ascii <szöveg>",
    run: async(client, message, args) => {
        figlet.text(args.join(" "), {
            font: "",
        }, async(err, data) => {
            message.channel.send(`\`\`\`${data}\`\`\``)
            }
        )
    }
}