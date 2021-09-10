const { Client, Collection, Intents } = require("discord.js");
const fs = require("fs");
const config = require("./utils/config.json");

const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILDS_MESSAGES],
});

client.on("ready", () => {
    console.log("AkyraDiscordBot Is Online Yay!");
    console.log(`logged in as ${client.user.tag}!`);
});

client.on("message.Create", (msg) => {
    if (msg.author.bot) return;

    let args = "";

    config.prefix.forEach((prefix) => {
        if (msg.content.startsWith(prefix)) {
           args = msg.content.substring(prefix.length).split(" "); 
        }
    });

    if (!args) return;
    client.commands.get(args[0]).execute(msg, args);
});

client.login(config.API_TOKEN);
