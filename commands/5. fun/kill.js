module.exports = {
    name: "kill",
    description: "Ölj meg valakit",
    aliases: ["oles"],
    permission: "",
    category: "👹 fun",
    usage: "kill <felhasználó> <indok>",
    run: async(client, message, args) => {
        let ember = message.mentions.members.first()
        let indok = args.slice(1).join(" ")
        let beszedek = [
            `leszúrta ${ember}-t`,
            `kiszedte a beleit és leszedte a fejét ${ember}-nek`,
            `mosószert öntött a szájába ${ember}-nek`,
            `mike Tysonná alakult és leboxolta ${ember} kocka fejét`,
            "nézz már rá, tényleg megölnéd?",
            "szegény, pedig még a füvet sem érintette meg",
            "sajnos őt nem tudod megölni, mert túl király hozzá",
        ]
        let kiszamolasa = Math.floor(Math.random() * beszedek.length)
        if(!ember) return message.channel.send("Magadat megölni xd")
        if(!indok) return message.channel.send(`${message.author.username} ${beszedek[kiszamolasa]}`)
        if(indok) {
            message.channel.send(`${message.author.username} ${indok} ${ember}`)
        }
    }
}