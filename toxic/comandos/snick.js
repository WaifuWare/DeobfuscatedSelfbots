const {
    MessageEmbed
} = require("discord.js");
const config = require('../config.json');
module.exports.run = async (client, message, args) => {
    message.delete({
        "timeout": 300,
        "reason": "kkj"
    });
    let color = config.cor;
    let prem = config.perm;
    if (!prem.includes(message.author.id))
        return message.reply("Você não tem permissão!");
    const YGYr = args.join(" ");
    if (!YGYr)
        return message.reply("Coloque o link do avatar!").then(msg => msg.delete({
            "timeout": 8000,
            "reason": "kkj"
        }));

    const wFVr = new MessageEmbed()
    .setAuthor("- toxic divulgações", client.user.avatarURL({
        "dynamic": true,
        "format": "png",
        "size": 1024
    }), "https://discord.gg/bBMmZ6n")
    .setDescription(`> Nick setado para: **${YGYr}**`)
    .setColor(color);
    client.user.setUsername(YGYr).then(QAMr => message.channel.send(wFVr)).catch(e => message.reply(`Erro ao setar nick!`));
};