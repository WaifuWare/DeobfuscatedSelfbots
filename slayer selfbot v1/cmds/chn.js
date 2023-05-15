const discord = require('discord.js')
const colors = require('colors')
const config = require("../config.json");

exports.run = async (client, message, args) => {
  message.delete()

  if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return console.log(colors.red(`Você não tem esssa permissão.`))

    for(qtd = 0; qtd < 50; qtd++) {
      await message.guild.createChannel(config.channels, { type: 'text' })
    }

    console.log(colors.green("  [+] Created channels."))
  }
