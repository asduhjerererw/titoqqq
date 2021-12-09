module.exports = {
    name: "hack",
    description: "100% legit hackelés",
    aliases: ["feltores"],
    permission: "",
    category: "👹 fun",
    usage: "hack <felhasználó>",
    run: async(client, message, args) => {
        let ember = message.mentions.users.first();
        let elozmenyxmennyi = Math.floor(Math.random() * 100 + 1);
        let elozmeny = [
            `Pornhub x${elozmenyxmennyi}`,
            `Twitter Gay pornó leak x${elozmenyxmennyi}`,
            `Családi titkok x${elozmenyxmennyi}`,
            `Hogyan dughatok 3centis pénisszel? x${elozmenyxmennyi}`,
            `Hogyan tudom feltörni valakinek az Epic Games fiókját? x${elozmenyxmennyi}`,
        ];
        let legutobbi = [
            `Pénisz növelő kenőcs`,
            `Túl lehet élni ha bekapom a lónak a faszát?`,
            `Mennyi chips kell a Kiss Miklós challangehez?`,
            `Hogyan lehetek bakugán?`,
        ]
        let legutobbiido = Math.floor(Math.random() * legutobbi.length);
        let elozmenyido = Math.floor(Math.random() * elozmeny.length);
        let felhasznalonevek = [
            "DinoszauruszZabalo45",
            "FeltorekvoElonMusk23",
            "SKHSemmiKozodHozza4334",
            "LoKigancsoloIpariTestor23",
        ]
        let fhido = Math.floor(Math.random() * felhasznalonevek.length);
        if(!args[0]) return message.channel.send("Kérlek tagelj be valakit, ahhoz hogy megtudjam őt hackelni!")
            if(ember) {
                let jelszavak = [
                    `${ember.tag}oláhcigány23`,
                    `${ember.tag}nemzetköziszopófantom69`,
                    `${ember.tag}hortobágyinyomorék1337`,
                    `${ember.tag}pankixfia23`,
                ]
                let jszido = Math.floor(Math.random() * jelszavak.length);
                const szoveg = await message.channel.send(`${ember} feltörése elkezdődött!`)
                setTimeout(() => {
                   szoveg.edit(`Előzményeiben talált dolgok: ${elozmeny[elozmenyido]}`);
                }, 3000);
                setTimeout(() => {
                    szoveg.edit(`Skype adatai lekérése\nFelhasználónév: ${felhasznalonevek[fhido]}\nJelszó: ${jelszavak[jszido]}`);
                 }, 6000);
                 setTimeout(() => {
                    szoveg.edit(`Legutóbbi előzmény megtekintése.. *${legutobbi[legutobbiido]}*`);
                 }, 9000);
                 setTimeout(() => {
                    szoveg.edit(`MesterMC jelszó lekérése...`);
                 }, 12000);
                 setTimeout(() => {
                    szoveg.edit(`MesterMC jelszó lekérve! Memz vírus rárakása...`);
                 }, 15000);
                 setTimeout(() => {
                    szoveg.edit(`Pornhub Prémium elvétele...`);
                 }, 18000);
                 setTimeout(() => {
                    szoveg.edit(`${ember} feltörése sikeres volt!`);
                 }, 21000);
            } else {
                message.channel.send("Kérlek tagelj be valakit, ahhoz hogy megtudjam őt hackelni!")
        }
    }
}