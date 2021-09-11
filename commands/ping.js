module.exports = {
    name: "ping",
    description: "Commands to get ping from user",
    execute(msg, args) {
        msg.replay("**:ping_pong: Pong! Your Ping Is:-**\n  ${ping}ms");
    },
};
