const commands = require("../config/commandHandler");
const config = require("../utils/config.json");

module.exports = {
    name: 'MessageCreate',
    execute(msg, client) {
        if (msg.author.bot) return;

        let args = "";
    
        config.prefix.forEach((prefix) => {
            if (msg.content.startsWith(prefix)) {
               args = msg.content.substring(prefix.length).split(" "); 
            }
        });
    
        if (!args) return;
        commands.get(args[0]).execute(msg, args);
    }
}
