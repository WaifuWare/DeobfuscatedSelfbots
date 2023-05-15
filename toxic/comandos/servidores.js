const {
    MessageEmbed
} = require("discord.js");
const config = require("../config.json");
module.exports.run = (client, message, args) => {
    message.delete({
        "timeout": 300,
        "reason": "kkj"
    });
    let color = config.cor;
    let prem = config.perm;
    if (!prem.includes(message.author.id))
        return message.reply("Você não tem permissão!");
    const cmwb = new MessageEmbed()
    .setAuthor("- toxic divulgações", client.user.avatarURL({
        "dynamic": true,
        "format": "png",
        "size": 1024
    }), "https://discord.gg/bBMmZ6n")
    .setDescription(`> Servers: (${client.guilds.cache.size}) \n\n${client.guilds.cache.filter(guild=>`>${guild.name} (${guild.members.cache.size} usuários)`).join(",\n")}`)
    .setColor(color);
    message.channel.send(cmwb).then(msg => msg.delete({
        "timeout": 10000,
        "reason": "kkj"
    }));
};