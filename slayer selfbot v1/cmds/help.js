const Discord = require('discord.js'),
  config = require("../config.json");

module.exports.run = (client, message) => {
    message.delete();
    const embed = new Discord.RichEmbed()
    .setAuthor(`slayer selfbot`)
    .addField('nuke', ' ``Delete all channels and roles.``', true)
    .addField('chn', ' ``Create raid channels.``', true)
    .addField('everyones', ' ``flood @everyone in all channels.``', true)
    .addField('purge', ' ``Remove all members inactive for 1 day.``', true)
    .addField('roni', ' ``Bugs and disable the Roni bot.``', true)
    .addField('banall', ' ``ban members all.``', true)
    .setFooter(`die with memories, not dreams`)
    .setColor("#006dff")
    .setImage('https://cdn.discordapp.com/attachments/870942705868488714/877201975027064862/image5.gif')

    message.channel.send(embed);
}