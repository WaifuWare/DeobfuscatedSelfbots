const Discord = require("discord.js");
module.exports.run = (client, message, args) => {
    message.delete();
    message.guild.pruneMembers(1).then(e =>
        console.log("Matei" + e + "pessoas!")).catch(console.error);
};