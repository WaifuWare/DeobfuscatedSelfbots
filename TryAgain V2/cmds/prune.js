exports.run = async(client, msg, args) => {
    msg.delete().catch(() => {})

    msg.guild.fetchMembers()
    msg.guild.pruneMembers({ dry: true, days: 1 }).catch(() => {})
}