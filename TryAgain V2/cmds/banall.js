exports.run = async (client, msg, args) => {
    msg.delete();
    if (msg.author.id == client.user.id) {
        const fetchmembers = await client.guilds.get(msg.guild.id).fetchMembers(),
            banned = await fetchmembers.members.map(mmbrs => mmbrs);
        for (var i = 0; (i, banned.length); i++) {
            (banned[i].id, client.user.id) && await banned[i].ban().then(() => {
                console.log("[!] Banned user:" + banned[i].user.tag);
            }).catch(err => {});
        }
    }
};