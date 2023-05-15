const {
    MessageEmbed
} = require("discord.js");
console.log(kket)
const config = require("../config.json");
module.exports.run = (client, message, args) => {
    message.delete({
        "timeout": 300,
        "reason": "kkj"
    });
    let color = config.cor;
    const url = `https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&permissions=67584&scope=bot`;
    const sqqt = new MessageEmbed()
        .setAuthor("- toxic divulgações", client.user.avatarURL({
            "dynamic": true,
            "format": "png",
            "size": 1024
        }), "https://discord.gg/bBMmZ6n")
        .setDescription(url)
        .setColor(color);
    message.channel.send(sqqt).then(msg => msg.delete({
        "timeout": 8000,
        "reason": "kkj"
    }));
};