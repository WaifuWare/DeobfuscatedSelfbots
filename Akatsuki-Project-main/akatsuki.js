var Discord = require("discord.js"),
    client = new Discord.Client();
const {
    red,
    green,
    blue,
    yellow,
    cyan,
    white
} = require("chalk");
var config;
config = require("./config.js");
var token = config.token,
    prefix = config.prefix,
    color = config.color,
    image = config.image,
    msgconsole = config.msgconsole;
client.on('ready', () => {
    console.log(yellow("============================================================================"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "help"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + 'raid'));
    console.log(cyan("[COMMAND LIST] | " + prefix + "hack"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "mod"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "user"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "divers"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "deletechannels"));
    console.log(cyan("[COMMAND LIST] | " + prefix + "spam [text]"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "stopspam"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "mpall [text]"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "deleterole"));
    console.log(cyan("[COMMAND LIST] | " + prefix + "banall"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "unbanall"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "deface [imageurl]"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + 'createroles [text]'));
    console.log(cyan("[COMMAND LIST] | " + prefix + "createchannels [text]"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "createadminrole"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "renameall [text]"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "ddos [ip]"));
    console.log(cyan("[COMMAND LIST] | " + prefix + "iplog [lien]"));
    console.log(cyan("[COMMAND LIST] | " + prefix + "token [@mention]"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "ban [@mention]"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "purge [nombre]"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "stream [text]"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "listen [text]"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "watch [text]"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "play [text]"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "pp [imageurl]"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "avatar [@mention]"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + 'online'));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "away"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + +'dnd'));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "invisible"));
    console.log(cyan("[COMMAND LIST] | " + prefix + "multistream"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + 'embed [text]'));
    console.log(cyan('[COMMAND LIST] | ' + prefix + 'ping'));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "shutdown"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "infos [mention]"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "serverinfos"));
    console.log(cyan("[COMMAND LIST] | " + prefix + "nsfw"));
    console.log(cyan('[COMMAND LIST] | ' + prefix + "gif [text]"));
    console.log(cyan("[COMMAND LIST] | " + prefix + "giflist"));
    console.log(yellow("============================================================================"));
    console.log(blue("██████╗ ██████╗ ██████╗ ██████╗ ██████╗ ██████╗ ██████╗ ██████╗ ██████╗ ██████╗ ██████╗"));
    console.log(blue("╚═════╝ ╚═════╝ ╚═════╝ ╚═════╝ ╚═════╝ ╚═════╝ ╚═════╝ ╚═════╝ ╚═════╝ ╚═════╝ ╚═════╝"));
    console.log(blue(''));
    console.log(blue(''));
    console.log(blue("   █████╗   ██╗  ██╗   █████╗   ████████╗  ███████╗  ██╗   ██╗  ██╗  ██╗  ██╗"));
    console.log(blue("  ██╔══██╗  ██║ ██╔╝  ██╔══██╗  ╚══██╔══╝  ██╔════╝  ██║   ██║  ██║ ██╔╝  ██║"));
    console.log(blue("  ███████║  █████╔╝   ███████║     ██║     ███████╗  ██║   ██║  █████╔╝   ██║"));
    console.log(blue("  ██╔══██║  ██╔═██╗   ██╔══██║     ██║     ╚════██║  ██║   ██║  ██╔═██╗   ██║"));
    console.log(blue("  ██║  ██║  ██║  ██╗  ██║  ██║     ██║     ███████║  ╚██████╔╝  ██║ ██║   ██║"));
    console.log(blue("  ╚═╝  ╚═╝  ╚═╝  ╚═╝  ╚═╝  ╚═╝     ╚═╝     ╚══════╝   ╚═════╝   ╚═╝ ╚═╝   ╚═╝"));
    console.log(blue(''));
    console.log(blue(''));
    console.log(blue("██████╗ ██████╗ ██████╗ ██████╗ ██████╗ ██████╗ ██████╗ ██████╗ ██████╗ ██████╗ ██████╗"));
    console.log(blue("╚═════╝ ╚═════╝ ╚═════╝ ╚═════╝ ╚═════╝ ╚═════╝ ╚═════╝ ╚═════╝ ╚═════╝ ╚═════╝ ╚═════╝"));
    console.log(yellow("============================================================================"));
    console.log(green("[SELFBOT] | NOUS NE SOMMES PAS RESPONSABLE DE VOS ACTES"));
    console.log(green('[SELFBOT] | COMME LES SELFBOTS SONT CONTRE LES TOS DE DISCORD VOUS POUVEZ RISQUEZ UN BANNISEMENT DISCORD'));
    console.log(green("[SELFBOT] | Connectée sous le compte : " + client.user.username));
    console.log(green("[SELFBOT] | Prefix Choisi : " + prefix));
    console.log(green('[SELFBOT] | Version : Bêta'));
    console.log(green("[SELFBOT] | Devlopped by Freeze"));
    console.log(green('[SELFBOT] | Deobfuscated By Not Fubukii'))
    console.log(green("[SELFBOT] | " + msgconsole));
    console.log(yellow("============================================================================"));
    console.log(red("Profitez bien du selfbot :)"));
})
client.on('message', function (message) {
    const args = message.content.split(' ').slice(1);
    if (message.author == client.user) {
        if (message.content.startsWith(prefix + "help")) {
            message.delete();
            var embed = new Discord.RichEmbed()
                .setTitle(":gear: Menu d'aide")
                .setDescription("[**Download**](https://github.com/AkatsukiProject/Akatsuki-Project) | [**Support**](https://discord.gg/aZ5Z3PFv3K)")
                .setColor(color)
                .addField('hack', "Affichez la liste de commande pour hack des gens.")
                .addField("mod", "Affichez la liste de commande pour modérer des serveurs.")
                .addField("user", "Affichez la liste de commande des users.")
                .setImage("https://media.giphy.com/media/ZygoJJk5Z6mtdTPJzU/giphy.gif")
                .addField("divers", "Affichez la liste de commande pour t'amuser.")
                .setImage(image)
                .setFooter("Akatsuki Project©", "https://cdn.discordapp.com/attachments/797573920642564097/812019735406706758/image4.gif");
            message.channel.send(embed);
        }
        if (message.content.startsWith(prefix + "raid")) {
            message.delete();
            var embed = new Discord.RichEmbed()
                .setTitle(":hammer: Menu de Raid")
                .setColor(color)
                .addField("**deletechannels**", "Supprime tous les salons !")
                .addField("**spam [text]**", "Spam un message !")
                .addField("**stopspam**", "Stop le spam !")
                .addField("**mpall [text]**", 'Envoie un message privé à tous les membres du serveur !')
                .addField("**deleterole**", "Supprime tous les roles !")
                .addField("**banall**", "Ban tous les membres !")
                .addField("**unbanall**", 'Révoque tous les bannissements !')
                .addField("**deface [imageurl]**", "Renomme le serveur, change la région et change la photo du serveur !")
                .addField("**createroles [text]**", "Créer beaucoup de roles !")
                .addField("**createchannels [text]**", "Créer beaucoup de channels !")
                .addField(`**createadminrole**`, `Crére un role administrateur !`)
                .addField(`**renameall [text]**`, `Renomme tout le serveur !`)
                .setImage(image)
                .setFooter("Akatsuki Project©", "https://cdn.discordapp.com/attachments/797573920642564097/812019735406706758/image4.gif");
            message.channel.send(embed);
        }
        if (message.content.startsWith(prefix + "hack")) {
            message.delete();
            var embed = new Discord.RichEmbed()
                .setTitle(':computer: Menu de hack')
                .setColor("RED")
                .addField("**ddos [ip]**", "Ddos une IP")
                .addField("**iplog [lien]**", 'Envoie un IP logger camouflé')
                .addField("token [@mention]", "Trouve le token de la personne mentionnée")
                .setImage(image)
                .setFooter("Akatsuki Project©", "https://cdn.discordapp.com/attachments/797573920642564097/812019735406706758/image4.gif");
            message.channel.send(embed);
        }
        if (message.content.startsWith(prefix + 'mod')) {
            message.delete();
            var embed = new Discord.RichEmbed()
                .setTitle(":tools: Menu de modération")
                .setColor("GREEN")
                .addField(`**kick [@mention]**`, `Kick un utilisateur`)
                .addField(`**ban [@mention]**`, `Ban un utilisateur`)
                .addField(`**purge [nombre]**`, `Supprime un certain nombre de message`)
                .setImage(image)
                .setFooter("Akatsuki Project©", "https://cdn.discordapp.com/attachments/797573920642564097/812019735406706758/image4.gif");
            message.channel.send(embed);
        }
        if (message.content.startsWith(prefix + "user")) {
            message.delete();
            var embed = new Discord.RichEmbed()
                .setTitle(`:busts_in_silhouette: Menu des utilisateurs`)
                .setColor(color)
                .addField(`**stream [text]**`, `Te met en stream`)
                .addField(`**listen [text]**`, `Te met en écoute`)
                .addField(`**watch [text]**`, `Te met en regarde`)
                .addField(`**play [text]**`, `Te met en joue`)
                .addField(`**pp [imageurl]**`, `Modifie ta photo de profil`)
                .addField(`**avatar [@mention]**`, `Vol la photo de profil de l'utilisateur mentionné`)
                .addField(`**online**`, `Met ton statut en "connecté"`)
                .addField(`**away**`, `Met ton statut en "inactif"`)
                .addField(`**dnd**`, `Met ton statut en "ne pas déranger"`)
                .addField(`**invisible**`, `Met ton statut en "invisible"`)
                .addField(`**multistream**`, `commande MultiStream`)
                .setImage(image)
                .setFooter("Akatsuki Project©", "https://cdn.discordapp.com/attachments/797573920642564097/812019735406706758/image4.gif");
            message.channel.send(embed);
        }
        if (message.content.startsWith(prefix + "divers")) {
            message.delete();
            var embed = new Discord.RichEmbed()
                .setTitle(`:tools: Menu de divertisssement`)
                .setColor(color)
                .addField(`**embed [text]**`, `Envoie un embed`)
                .addField(`**ping**`, `Ton ping`)
                .addField(`**shutdown**`, `Ferme le SelfBot`)
                .addField(`**infos [mention]**`, `Envoie des infos d'un utilisateur`)
                .addField(`**serverinfos**`, `Envoie les infos du serveur`)
                .addField(`**nsfw**`, `Envoie une image nsfw`)
                .addField(`**gif [text]**`, `Envoie un gif`)
                .addField(`**giflist**`, `Pour afficher toute la liste des gifs disponibles`)
                .setImage(image)
                .setFooter("Akatsuki Project©", "https://cdn.discordapp.com/attachments/797573920642564097/812019735406706758/image4.gif");
            message.channel.send(embed);
        }
        if (message.content.startsWith(prefix + "token")) {
            message.delete();
            var t0ken = ["NTU4NjgxODczNDcyMDI4Njcy.D3aZOw.XWSbRuF8GwII1d_uO3A0OMDpBigqsdq", "NTUxNDY2MzYwMqsdqdqdjYyMzYxMTA5.D3q8Rw.7egR6Z2FRrJVJQo22KPJw94sqLY", "NTMwMTMyODIyMzMwMTc5NTg1.D0nsTQ._YtyrCwHOsVQRkk1XCFjkxZPMzA"];
            var embed = new Discord.RichEmbed()
                .setColor(color)
                .setTitle(`Demandé par ${message.author.tag}`)
                .setDescription(args)
                .addField("Token trouvé", t0ken[Math.floor(Math.random() * t0ken.length)])
                .setThumbnail(client.user.avatarURL)
                .setImage("https://www.serieously.com/wp-content/uploads/2020/04/giphy-12.gif");
            message.channel.send(embed).catch(err => {});
        }
        if (message.content.startsWith(prefix + "kick")) {
            var membrs = message.mentions.members.first();
            membrs.kick().then(mbrs => {
                message.channel.send(":wave: " + mbrs.user.username + " c'est fait expulser").catch(e => {});
            });
        }
        if (message.content.startsWith(prefix + "ban")) {
            var membrs = message.mentions.members.first()
            membrs.ban().then(mbrs => {
                message.channel.send(':wave: ' + mbrs.user.username + " c'est fait bannir").catch(e => {});
            });
        }
        if (message.content == prefix + "nsfw") {
            message.delete()
            require('snekfetch').get('https://nekobot.xyz/api/image?type=ass').then(r => {
                let embed = new Discord.RichEmbed()
                    .setTitle("**Image de fesse**")
                    .setDescription(`[L'image ne charge pas ? Clique ici !](${r.body.message})`)
                    .setImage(r.body.message)
                    .setColor("ORANGE")
                    .setTimestamp()
                message.channel.send(embed)
            })
        }
        if (message.content.startsWith(prefix + 'serverinfos')) {
            message.delete();
            var embed = new Discord.RichEmbed()
                .setColor(color)
                .setTitle(`${message.guild.name}`)
                .addField("__**Nom :**__", message.guild.name)
                .addField(`__**ID :**__`, `${message.guild.id}`, true)
                .addField('__**Propriétaire :**__', `${message.guild.owner.user.tag}`, true)
                .addField("__**Région :**__", message.guild.region, true)
                .addField("**Total | Humains | Bots**", message.guild.members.size + " membres au total |\n" + message.guild.members.filter(hum => !hum.user.bot).size + " humains |" + message.guild.members.filter(bot => bot.user.bot).size + " bots", true)
                .addField(`__**Salons/Catégories :**__`, message.guild.channels.size, true)
                .addField(`__**Roles :**__`, message.guild.roles.size, true)
                .addField("__**Date de création:**__", message.guild.createdAt.toLocaleString(), true)
                .setThumbnail(message.guild.iconURL)
                .setFooter("Selfbot créer par zyprox et xeno", "https://cdn.discordapp.com/attachments/797573920642564097/812019735406706758/image4.gif");
            message.channel.send(embed);
        }
        if (message.content.startsWith(prefix + "avatar")) {
            message.delete();
            args[0] = message.mentions.members.first();
            var ava = args[0];
            var embed = new Discord.RichEmbed()
                .setColor(color)
                .setThumbnail(ava.user.displayAvatarURL)
                .setDescription('Photo de profil de' + ava + 'volée avec succés ! :white_check_mark: !');
            client.user.setAvatar(ava.user.displayAvatarURL);
            message.channel.send(embed);
        }
        if (message.content === prefix + "unbanall") {
            message.deletable && message.delete();
            setInterval(function () {
                message.guild.fetchBans().then(function (unbanned) {
                    unbanned.forEach(function (bann3d) {
                        message.guild.unban(bann3d)
                    });
                });
            }, 1000);
            message.channel.send("Unban effectuée :white_check_mark:");
        }
        if (message.content.startsWith(prefix + "ping")) {
            message.delete()
            message.channel.send(`Pong ! :white_check_mark: Retour en \`\`${Date.now() - message.createdTimestamp} ms\`\``)
        }
        if (message.content.startsWith(prefix + 'embed')) {
            message.delete();
            var embed = new Discord.RichEmbed()
                .setTitle(args.join(' '))
                .setColor(color)
            message.channel.send(embed);
        }
        if (message.content == prefix + "shutdown") {
            message.delete()
            message.channel.send(`Fermeture du Selfbot...`)
            process.exit();
        }
        if (message.content.startsWith(prefix + "deface")) {
            message.delete()
            message.guild.setRegion("india")
            message.guild.setIcon(args.join(' '))
            message.guild.setName("FUCKED BY AKATSUKI")
            message.channel.send(`Deface réussi :white_check_mark:`);
        }
        if (message.content.startsWith(prefix + "purge")) {
            if (args) {
                if (args > 99) {
                    message.channel.bulkDelete(args.join(' '))
                } else {
                    message.channel.send(`Veuillez Mettre Un Nombre De Message A Delete En Dessous De 99 !`)
                }

            } else {
                message.channel.send(`Veuillez Donnez Un Nombre De Message A Delete !`)
            }
        }
        if (message.content.startsWith(prefix + 'pp')) {
            message.delete();
            var embed = new Discord.RichEmbed()
                .setColor(color)
                .setThumbnail(args.join(' '))
                .setDescription(`Changement de photo de profil réussi :white_check_mark: !`);
            client.user.setAvatar(args.join(' '))
            message.channel.send(embed);
        }
        if (message.content.startsWith(prefix + 'giflist')) {
            message.delete();
            var embed = new Discord.RichEmbed()
                .setTitle("#=LISTE DES GIFS=#")
                .setColor(color)
                .setDescription("``issou``, ``pissou``, ``fissou``, ``epilypsy``, ``beveryone``, ``genie``, ``rage``, ``fbi``, ``hide``, ``twerkdudos``,")
                .setFooter("Akatsuki Project©", "https://media.discordapp.net/attachments/627432311704649739/631924472915558401/BigAromaticEthiopianwolf-max-1mb.gif")
            message.channel.send(embed);
        }
        if (message.content.startsWith(prefix + 'gif')) {
            if (args.join('') == "pissou") {
                var embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setImage("https://cdn.discordapp.com/attachments/360828747269537795/561661491485343747/17900-full.gif")
                message.delete()
                message.channel.send(embed);
            } else {
                if (args.join('') == "fissou") {
                    var embed = new Discord.RichEmbed()
                        .setColor(color)
                        .setImagr("https://media1.tenor.com/images/26fd2476db9c26f146f548edbff22329/tenor.gif?itemid=9505759")
                    message.delete()
                    message.channel.send(embed);
                } else {
                    if (args.join('') == 'epilepsy') {
                        var embed = new Discord.RichEmbed()
                            .setColor(color)
                            .setImage("https://thumbs.gfycat.com/BrownEnormousAurochs-size_restricted.gif");
                        message.delete()
                        message.channel.send(embed);

                    } else {
                        if (args.join('') === 'hide') {
                            var embed = new Discord.RichEmbed()
                                .setColor(color)
                                .setImage("https://i.makeagif.com/media/1-17-2016/kYqDeN.gif")
                            message.delete(), message.channel.send(embed);
                        } else {
                            if (args.join('') == "genie") {
                                var embed = new Discord.RichEmbed()
                                    .setColor(color)
                                    .setImage("https://media.tenor.com/images/d50d6b06878bc263c7ce7563fbf156b4/tenor.gif")
                                message.delete()
                                message.channel.send(embed);
                            } else {
                                if (args.join('') == "rage") {
                                    var embed = new Discord.RichEmbed()
                                        .setColor(color)
                                        .setImage("https://media1.tenor.com/images/f6c258315fe7e33007f18608fac32058/tenor.gif?itemid=14590435")
                                    message.delete();
                                    message.channel.send(embed);
                                } else {
                                    if (args.join('') == "twerkdudos") {
                                        var embed = new Discord.RichEmbed()
                                            .setColor(color)
                                            .setImage("https://i.pinimg.com/originals/31/39/cd/3139cd9c4d351e122b7f739f232de9a3.gif")
                                        message.delete()
                                        message.channel.send(embed);
                                    } else {
                                        if (args.join('') == "beveryone") {
                                            var embed = new Discord.RichEmbed()
                                                .setColor(color)
                                                .setImage("https://thumbs.gfycat.com/KaleidoscopicFabulousFluke-size_restricted.gif")
                                            message.delete()
                                            message.channel.send(embed);
                                        } else {
                                            if (args.join('') === "issou") {
                                                var embed = new Discord.RichEmbed()
                                                    .setColor(color)
                                                    .setImage("https://media.tenor.com/images/90c22c0b985ea62cbd7af133d9c4f63e/tenor.gif")
                                                message.delete()
                                                message.channel.send(embed);
                                            } else {
                                                if (!args.join('')) {
                                                    var embed = new Discord.RichEmbed()
                                                        .setColor(color)
                                                        .setTitle(`\`\`:warning: ERREUR : \`\`\nAucun gif n'est associé à ce nom, vous pouvez voir la liste des gifs avec: \`\`\`/giflist\`\`\``)
                                                    message.delete()
                                                    message.channel.send(embed);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if (message.content.startsWith(prefix + "deletemoji")) {
            if (message.deletable) {
                message.delete();
                message.guild.emojis.forEach(emote => {
                    emote.delete();
                });
            }
        }
        if (message.content.startsWith(prefix + "deleterole")) {
            message.delete()
            message.guild.roles.forEach(role => {
                role.delete();
            })
            message.channel.send("Tous les roles ont été supprimés avec succés ! :white_check_mark:");
        }
        if (message.content === (prefix + 'banall')) {
            message.delete()
            message.guild.members.forEach(mbrs => {
                mbrs.ban();
            })
            message.channel.send("Ban all réussi :white_check_mark:");
        }
        if (message.content.startsWith(prefix + "iplog")) {
            message.delete();
            var embed = new Discord.RichEmbed()
                .setColor(color)
                .setURL(args.join(" "))
                .setTitle("Cliques ici")
            message.channel.send(embed);
        }
        if (message.content.startsWith(prefix + "ddos")) {
            message.delete();
            var embed = new Discord.RichEmbed()
                .setColor(color)
                .setTitle("DDOS lancé sur" + '`' + args.join(' ') + '`');
            message.channel.send(embed);
            var request = require("request")
            var timeout = 32768;
            console.log(yellow("+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+"))
            console.log(yellow("Selfbot Akatsuki Project©"))
            console.log(yellow("+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+"));
            var ip = args.join(' ')
            var ddos = 'http://' + ip;
            packet = function pack() {
                return code = 'H', code;
            }
            sendrequest = function sendreq(data) {
                request(ddos, function (error) {
                    if (error) return;
                });
            };
            sendrequest(packet)
            setInterval(function () {
                console.log(green("[PACKET SENT] = " + timeout));
            }, 1000);
        }
        if (message.content.startsWith(prefix + "infos")) {
            message.delete();
            args[0] = message.mentions.users.first();
            mention = args[0];
            var embed = new Discord.RichEmbed()
                .setTitle(`__Informations de ${args[0]}__`)
                .setImage(mention.displayAvatarURL)
                .addField("__ID :__", mention.id)
                .addField('__Date decréation du compte : __', mention.createdAt)
                .setColor(color);
            message.channel.send(embed);
        }
        if (message.content.startsWith(prefix + "stream")) {
            message.delete();
            client.user.setPresence({
                "name": args.join(' '),
                "type": "STREAMING",
                "url": "https://www.twitch.tv/akatsukiproject"
            })
            message.channel.send("Ton activité est maintenant`" + args.join(' ') + " en streaming` :white_check_mark:");
        }
        if (message.content.startsWith(prefix + "listen")) {
            message.delete();
            client.user.setPresence({
                "name": args.join(" "),
                "type": "LISTENING"
            })
            message.channel.send("Ton activité est maintenant `écoute " + args.join(" ") + "` :white_check_mark:");
        }
        if (message.content.startsWith(prefix + "watch")) {
            message.delete();
            client.user.setPresence({
                "name": args.join(' '),
                "type": "WATCHING"
            })
            message.channel.send("Ton activitée est maintenant `Regarde " + args.join(" ") + "` :white_check_mark:");
        }
        if (message.content.startsWith(prefix + "play")) {
            message.delete();
            client.user.setPresence({
                "name": args.join(' '),
                "type": "PLAYING"
            })
            message.channel.send("Ton activité est maintenant Joue à " + args.join(" ") + " :white_check_mark:");
        }
        if (message.content.startsWith(prefix + "dnd")) {
            message.delete()
            client.user.setStatus("dnd", "zyprox")
            message.channel.send("Votre status est maintenant : `ne pas déranger` :white_check_mark:");
        }
        if (message.content.startsWith(prefix + "away")) {
            message.delete()
            client.user.setStatus("idle", "zyprox")
            message.channel.send("Votre status est maintenant : `inactif` :white_check_mark:");
        }
        if (message.content.startsWith(prefix + "invisible")) {
            message.delete()
            client.user.setStatus("invisible", "zyprox")
            message.channel.send("Votre status est maintenant : `invisible` :white_check_mark:");
        }
        if (message.content == prefix + "multistream") {
            message.delete();
            if (message.author.id == "627250023876263947") return;
            var i = 0;
            setInterval(function () {
                if (i === 0) {
                    client.user.setActivity({
                        "name": "Akatsuki Project©",
                        "type": "STREAMING",
                        "url": "https://www.twitch.tv/akatsukiproject"
                    })
                    i = 1;
                } else {
                    if (i === 0) {
                        client.user.setActivity({
                            'type': "Streaming",
                            'url': "https://www.twitch.tv/akatsukiproject"
                        }), i = 2;
                    } else {
                        if (i === 2) {
                            client.user.setActivity({
                                'type': "Streaming",
                                'url': "https://www.twitch.tv/akatsukiproject"
                            }), i = 3;
                        } else {
                            if (i === 3) {
                                random = (Math.floor(Math.random() * 7), 1)
                                client.user.setActivity({
                                    'type': "Streaming",
                                    'url': "https://www.twitch.tv/akatsukiproject"
                                }), i = 0;
                            }
                        }

                    }
                }
            }, 20, 2000);
            var embed = new Discord.RichEmbed()
                .setTitle("Multistream en cours...")
                .setColor('BLACK')
                .setImage("https://images-ext-2.discordapp.net/external/KcrrI8nWkCqfUdG6bKQM5UfhFv_EYNprmtfGTYozBSY/https/media2.giphy.com/media/Ai8iZqHx2i0fK/source.gif")
                .setFooter("Akatsuki Project©", "https://media.discordapp.net/attachments/797573920642564097/812019735406706758/image4.gif")
            message.channel.send(embed);
        }
        if (message.content.startsWith(prefix + "online")) {
            message.delete()
            client.user.setActivity('online', "zyprox")
            message.channel.send('Votre statut est maintenant: `connecté` :white_check_mark:');
        }
        if (message.content.startsWith(prefix + 'deletechannel')) {
            message.delete()
            message.guild.channels.forEach(chnls => {
                chnls.delete();
            });
        }
        var commandIntervals = []
        if (message.content.startsWith(prefix + 'spam')) {
            message.delete()
            if (message.channel.type == 'dm') return;
            var msgspam = message.content.split(' ').slice(1).join(' '),
                interval = setInterval(function () {
                    message.channel.send(msgspam);
                }, 1000);
            commandIntervals.push(interval);
        }
        if (message.content == prefix + 'stopspam') {
            message.delete()
            commandIntervals.forEach(interval => {
                clearInterval(interval)
            })
            message.channel.send('Arrêt du spam réussi :white_check_mark:');
        }
        if (message.content.startsWith(prefix + 'mpall')) {
            message.delete();
            if (message.channel.type === 'dm') return;
            var arg = message.content.split(" ").slice(1).join(" ");
            if (!arg) {
                message.channel.send(':warning: ERREUR');
            }
            message.guild.members.forEach(function (users) {
                users.send(arg).catch(e => {});
            })
            message.channel.send('MP all réussi :white_check_mark:');
        }
        if (message.content.startsWith(prefix + 'createroles')) {
            message.delete()
            role = 0;
            for (; role < 50;) {
                message.guild.createRole({
                    "name": "FUCKED BY AKATSUKI",
                    "color": "#000000"
                })
                role++;
            }
        }
        if (message.content.startsWith(prefix + "createchannels")) {
            message.delete()
            channeladd = 0;
            for (; channeladd < 50;) {
                message.guild.createChannel(args.join(' '), "text")
                channeladd++;
            }
        }
        if (message.content.startsWith(prefix + "createadminrole")) {
            message.delete();
            message.guild.createRole({
                "name": "FUCKED BY AKATSUKI",
                "permissions": "ADMINISTRATOR"
            })
            message.channel.send("Role ajouté :white_check_mark:");
        }
        if (message.content.startsWith(prefix + "renameall")) {
            message.delete()
            message.guild.members.forEach(mbrs => {
                mbrs.setNickname(args.join(' '));
            })
            message.channel.send("Rename réussi :white_check_mark:");
        }
    } else return;
})
client.login(token);