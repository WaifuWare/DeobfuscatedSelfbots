const discord = require('discord.js'),
    colors = require('colors'),
    config = require("../config.json"),
    axios = require("axios");
function spam(web) {
    
    for (let i = 0; i < config.everyones; i++) {
        axios({
            'url':  + 'https://discordapp.com/api/webhooks/' + web.id + '/' + web.token,
            'method': "POST",
            'data': {
                'content': "@everyone https://discord.gg/v9GPQea"
            },
            'headers': {
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.309 Chrome/83.0.4103.122 Electron/9.3.5 Safari/537.36'
            }
        }).then().catch(err => console.log("  [-] Unable to send webhook:" + err));
    }
}
exports.run = async (client, message, args) => {
    message.delete()
    message.guild.channels.forEach(channel => {
        channel.createWebhook("mauri fofo").then(web => spam(web)).catch(err => {});
    })
    console.log(colors.green("[+] all webhooks has ben sended."));
};