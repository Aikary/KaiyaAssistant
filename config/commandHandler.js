const { Collection } = require("discord.js")
const fs = require("fs");

const commands = new Collection();
const files = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of files) {
    const commands = require(`../commands/${file}`);
    commands.set(commands.name, command);
}

module.exports = commands;

