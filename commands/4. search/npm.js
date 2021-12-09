const { MessageEmbed } = require("discord.js")
const fetch = require('node-fetch')
const moment  = require('moment')
module.exports = {
    name: "npm",
    description: "npm packagekat tudsz keresni.",
    category: "🔎 Keresés",
    usage: "npm <package>",
    permission: "",
    aliases: ["npms"],
    run: async(client, message, args) => {
        let query = args.join(" ")
        if(!query) query = await awaitMessages(message)
        const res = await fetch(`https://registry.npmjs.com/${encodeURIComponent(query)}`).catch(err => console.log(err));
        if(res.status === 404) return message.channel.send("Nem találtam semmilyen információt.")
        const body = await res.json()
        const embed = new MessageEmbed()
        .setColor("BLUE")
        .setTitle(message.author.tag + " | " + query)
        .setURL(`https://www.npmjs.com/package/${body.name}`)
        .setDescription(body.description || "Nincs leírás")
        .addField('>> Verzió', body['dist-tags'].latest, true)
        .addField('>> Létrehozta', moment.utc(body.time.created).format('YYYY/MM/DD hh:mm:ss'), true)
        .addField('>> Utoljára módosítva', body.time.modified ? moment.utc(body.time.modified).format('YYYY/MM/DD hh:mm:ss') : 'Nincs', true)
        .addField('>> Készítő(k)', body.maintainers.map(user => user.name).join(', '))
        message.channel.send(embed);
        async function awaitMessages(message) {
            let responce;
        
            const filter = (user) => {
                return user.author.id === message.author.id;
            };
        
            message.channel.send('**Mit szeretnél keresni?** Ha nem akarsz keresni akkor "kilépés".');
        
            await message.channel.awaitMessages(filter, { max: 1, time: 120000, errors: ['time'] })
                .then((msg) => {
                    const firstMsg = msg.first();
                    if (firstMsg.content.toLowerCase() === 'kilépés') return firstMsg.react('👍');
                    responce = firstMsg.content;
                })
                .catch(() => {
                    message.channel.send('Kifutottál az időből.');
                });
        
            return responce;
        }
    }
}