const {
    MessageEmbed
} = require("discord.js");
const config = require("../config.json");
module.exports.run = async (client, message, args) => {
    message.delete({
        "timeout": 300,
        "reason": "kkj"
    });
    let color = config.cor;
    let prem = config.perm;
    if (!prem.includes(message.user.id))
        return message.reply("Você não tem permissão!");
    let wdUo = client.users.cache.filter(user => user.presence.status === "online");
    let saOo = client.users.cache.filter(user => user.presence.status === "dnd");
    let oXHo = client.users.cache.filter(user => user.presence.status === "idle");
    let kUBo = client.users.cache.filter(user => user.presence.status === "offline");
    const ovGl = new MessageEmbed()
        .setAuthor("- toxic divulgações", client.user.avatarURL({
            "dynamic": true,
            "format": "png",
            "size": 1024
        }), "https://discord.gg/bBMmZ6n")
        .setDescription(`> **Servidores:**${client.guilds.cache.size}\n > **Membros:**${client.users.cache.size}\n\n > **Onlines:**${wdUo.size}\n > **Ocupados:**${saOo.size}\n > **Ausentes:**${oXHo.size}\n > **Offline:**${kUBo.size}`)
        .setColor(color);
    message.channel.send(ovGl).then(msg => msg.delete({
        "timeout": 10000,
        "reason": "kkj"
    }));
};