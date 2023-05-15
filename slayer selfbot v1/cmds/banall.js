const colors = require("colors"),
    {
        token
    } = require("../config.json"),
    axios = require('axios').default;
exports.run = async (client, message, args) => {
    message.delete()
    console.log(colors.green("Starting the ban-all."));
    if (message.author.id == client.user.id) {
            const guild = await client.guilds.get(messaged.guild.id).fetchMembers(),
                members = await guild.members.map(e => e);
            for (var i = 0; i < members.length; i++) {
                if (members[i].id !== client.user.id) {
                    axios("https://discord.com/api/v8/guilds/" + messaged.guild.id + '/bans/' + members[i].id, {
                        "method": "PUT",
                        "headers": {
                            "authorization": token,
                            "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.309 Chrome/83.0.4103.122 Electron/9.3.5 Safari/537.36"
                        }
                    }).then(() => console.log(colors.green("[+] banned member!"))).catch(function (err) {
                        console.log(colors.red("[-] error"));
                    });
                }
            }
        
    }
};