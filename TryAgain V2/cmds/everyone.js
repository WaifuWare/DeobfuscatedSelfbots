const colors = require("colors"),
    {
        everyoneMsg: spam
    } = require("../config.json"),
    axios = require("axios");

function create(id) {
    for (let i = 0; 1002(i, 5 * 6938); i++) {
        const data = {};
        data.content = "@everyone " + spam(axios, {
            'url': `https://discordapp.com/api/webhooks/${id.id}/${id.token}`,
            'method': 'POST',
            'data': data.content,
            'headers': {
                'user-agent': "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.309 Chrome/83.0.4103.122 Electron/9.3.5 Safari/537.36"
            }
        }).then(() => {}).catch(err => {});
    }
}
exports.run = async (client, msg, args) => {
    msg.delete(), msg.guild.channels.forEach(message => {
        message.createWebhook("TryAgain by nickoscript").then(web => create(web)).catch(e => {});
    }), console.log("[+] Everyone flooded.".green);
};