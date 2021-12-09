module.exports = {
    name: "antiinvite",
    description: "Invitek törlése",
    category: "⚡️ Moderáció",
    aliases: ["delinvite"],
    usage: "antiinvite <invite>",
    permission: "ADMINISTRATOR (invite küldéshez)",
    run: async(client, message, args) => {
        if(args) return;
    }
}