const {
    MessageEmbed
} = require("discord.js");
const MdDK = require("colors");
const config = require("../config.json");
module.exports.run = async (client, message, args) => {
    message.delete({
        "timeout": 300,
        "reason": "kkj"
    });
    let color = config.cor;
    let prem = config.perm;
    if (!prem.includes(message.author.id))
        return message.reply("Você não tem permissão!");

    const cqbL = args.join(" ");
    if (!cqbL)
        return message.reply("Me diga algo para mandar!").then(msg => msg.delete({
            "timeout": 8000,
            "reason": "kkj"
        }));

    let AMWH = client.users.cache.filter(user => user.presence.status === "online");
    let wJQH = client.users.cache.filter(user => user.presence.status === "dnd");
    let sGKH = client.users.cache.filter(user => user.presence.status === "idle");
    let oDEH = 0;
    let QEHH = 0;
    let QYuI = 0;
    let sayI = 0;
    let MVoI = 0;
    const oXrI = new MessageEmbed()
    .setAuthor("- toxic divulgações", client.user.avatarURL({
        "dynamic": true,
        "format": "png",
        "size": 1024
    }), "https://discord.gg/bBMmZ6n")
    .setDescription(`> **Enviando para:**\n\n > **Servidores:**${client.guilds.cache.size}\n > **Total:**${client.users.cache.size}\n\n > **Onlines:**${AMWH.size}\n > **Ocupados:**${wJQH.size}\n > **Ausentes:**${sGKH.size}`)
    .setColor(color);
    message.channel.send(oXrI).then(ISiI => ISiI.delete({
        "timeout": 10000,
        "reason": "kkj"
    }));
    AMWH.array().forEach(msg => {
        msg.send(cqbL).then(() => {
            console.clear();
            console.log(`[ToxicSource] Recebeu: x${oDEH}\n[ToxicSource] Nao Recebeu: x${QEHH}\n[ToxicSource] Status: Online [x${QYuI}/x${AMWH.size}]`.green);
            QYuI++;
            oDEH++;
        }).catch(() => {
            console.clear();
            console.log(`[ToxicSource] Recebeu: x${oDEH}\n[ToxicSource] Nao Recebeu: x${QEHH}\n[ToxicSource] Status: Online [x${QYuI}/x${AMWH.size}]`.red);
            QYuI++;
            QEHH++;
        });
    });
    wJQH.array().forEach(msg => {
        msg.send(cqbL).then(() => {
            console.clear();
            console.log(`[ToxicSource] Recebeu: x${oDEH}\n[ToxicSource] Nao Recebeu: x${QEHH}${ofGK}${sayI}/x${wJQH.size}]`.green);
            sayI++;
            oDEH++;
        }).catch(() => {
            console.clear();
            console.log(`[ToxicSource] Recebeu: x${oDEH}\n[ToxicSource] Nao Recebeu: x${QEHH}${ofGK}${sayI}/x${wJQH.size}]`.red);
            sayI++;
            QEHH++;
        });
    });
    sGKH.array().forEach(msg => {
        msg.send(cqbL).then(() => {
            console.clear();
            console.log(`[ToxicSource] Recebeu: x${oDEH}\n[ToxicSource] Nao Recebeu: x${QEHH}${QgJK}${MVoI}/x${sGKH.size}]`.green);
            MVoI++;
            oDEH++;
        }).catch(() => {
            console.clear();
            console.log(`[ToxicSource] Recebeu: x${oDEH}\n[ToxicSource] Nao Recebeu: x${QEHH}${QgJK}${MVoI}/x${sGKH.size}]`.red);
            MVoI++;
            QEHH++;
        });
    });
};