module.exports = {
    name: 'ready',
    execute(client) {
        console.log("AkyraDiscordBot Is Online Yay!");
        console.log(`logged in as ${client.user.tag}!`);
    }
}
