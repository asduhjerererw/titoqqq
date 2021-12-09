const Discord = require('discord.js')
const client = new Discord.Client();
const TicTacToe = require('discord-tictactoe');
module.exports = {
    name: "kopapirollo",
    description: "Kő papír olló",
    aliases: ["ttt"],
    permission: "",
    category: "👹 fun",
    usage: "kopapirollo",
    run: async(client, message, args) => {
        new TicTacToe({
            language: 'hu', command: '>>kopapirollo'
        }).attach(client)
    }
}
