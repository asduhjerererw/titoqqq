module.exports = {
    name: "emojify",
    description: "Tudsz írni emoji betűkkel vagy mi xd",
    aliases: ["ejfy"],
    permission: "",
    category: "👹 fun",
    usage: "emojify <szöveg>",
    run: async(client, message, args) => {
        if(!args.length) return message.channel.send("Kérlek írj be valamit!")
        const specialCodes = {
            '0': ':zero:',
            '1': ':one:',
            '2': ':two:',
            '3': ':three:',
            '4': ':four:',
            '5': ':five:',
            '6': ':six:',
            '7': ':seven:',
            '8': ':eight:',
            '9': ':nine:',
            '#': ':hash:',
            '*': ':asterisk:',
            '?': ':grey_question:',
            '!': ':grex_exclamation:',
            '': '   '
            }
            const text = args.join(" ").toLowerCase().split('').map(letter => {
                if(/[a-z]/g.test(letter)) {
                    return `:regional_indicator_${letter}:`
                } else if (specialCodes[letter]) {
                    return `${specialCodes[letter]}`
                }
                return letter;
            }).join('');
            message.channel.send(text)
        }
    }