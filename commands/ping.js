module.exports = {
    name: "ping",
    description: "Commands to test bot connection",
    execute(msg, args) {
        msg.replay("pong");
    },
};