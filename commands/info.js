module.exports = {
    name: "info",
    description: "Commands to get information about bot and user",
    execute(msg, args) {
        if (args[1]) {
            if (args[1] === "bot") {
                msg.channel.send("This Bot Made By zAzkkya and Aikari");
            } else if (args[1] === "user") {
                msg.channel.send(`Username : ${msg.author.username}`);
            }
        } else {
            msg.channel.send("Please use the valid arguments");
        }
    },
};