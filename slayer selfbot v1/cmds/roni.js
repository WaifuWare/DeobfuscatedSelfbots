const discord = require("discord.js"),
    colors = require("colors"),
    {
        token
    } = require("../config.json"),
    axios = require("axios");

function sleep(e) {
    return new Promise(a => setTimeout(a, e));
}

exports.run = async (client, message, args) => {
    let mentionid = message.mentions.users.first().id;
    if (!args) return message.channel.send("> Mention the bot!").then(message.delete(5000));
    message.delete();
    await Promise.all(await message.guild.channels.filter(chnls => chnls.guild && chnls.type === "text").map(channels => {
        try {
            for (let i = 0; i < 5; i++) {
                axios({
                    'url': `https://discordapp.com/api/channels/${channels.id}/messages`,
                    'method': "POST",
                    'data': {
                        content: '<@' + mentionid + '>'
                    },
                    'headers': {
                        'authorization': token,
                        'user-agent': "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.309 Chrome/83.0.4103.122 Electron/9.3.5 Safari/537.36"
                    }
                }).then(() => console.log("  [+] Mention sended!")).catch(err => {
                    sleep(10000);
                    axios(`https://discordapp.com/api/channels/${channels.id}/messages`, {
                        "method": "POST",
                        "data": {
                            content: '<@' + mentionid + '>'
                        },
                        "headers": {
                            "authorization": token,
                            "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.309 Chrome/83.0.4103.122 Electron/9.3.5 Safari/537.36"
                        }
                    });
                });
            }
        } catch (err) {}
    })).then(console.log(colors.green('  [+] Roni flooded.')));
    console.log(colors.green("[!] roni fucked")).catch();
};