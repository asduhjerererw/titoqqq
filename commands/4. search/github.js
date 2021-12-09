const { Discord, discord } = require("discord.js");
const { MessageEmbed } = require("discord.js");
const moment = require("moment");
const fetch = require("node-fetch")

module.exports = {
    name: "github",
    description: "Github fiókok keresése.",
    aliases: ["gh"],
    permission: "",
    category: "🔎 Keresés",
    usage: "github <felhasználó>",
    run: async (client, message, args) => {

       try {

  if (!args[0]) return message.channel.send(`Kérlek adj meg egy felhasználónevet`)
    
  fetch(`https://api.github.com/users/${args.join('-')}`)
    .then(res => res.json()).then(body => {
      if(body.message) return message.channel.send(`User Not Found | Please Give Me A Valid Username!`);
    let { login, avatar_url, name, id, html_url, public_repos, followers, following, location, created_at, bio } = body;

            const embed = new MessageEmbed()
            .setAuthor(`${login}`, avatar_url)
            .setColor(`#211F1F`)
            .setThumbnail(`${avatar_url}`)
            .addField(`Név`, `${login}`, true)
            .addField(`ID`, `${id}`, true)
            .addField(`Bio`, `${bio || "Nincs bio"}`, true)
            .addField(`Projectek`, `${public_repos || "Nincs"}`, true)
            .addField(`Követők`, `${followers}`, true)
            .addField(`Követ`, `${following}`, true)
            .addField(`Fiók létrehozva`, moment.utc(created_at).format("dddd, MMMM, Do YYYY"))
            .setFooter(client.user.username, client.user.displayAvatarURL())

            message.channel.send(embed)

    })

        } catch (error) {
            console.log(`Hiba [github]`, error);
            return message.channel.send(`Nincs ilyen felhasználó`)
        }
    }
};