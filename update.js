const Discord = require('discord.js')
module.exports = (client) => {
  client.guilds.cache.forEach((guild) => {
    Blokes = client.channels.cache.get('770244707551936532')
    const UpdateEmbed = new Discord.MessageEmbed()
    .setTitle("您好Jixaw Discord的用户")
    .setURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    .setDescription(`Brexite's chinese cousin now exempts administrators from the cooldown or something xddddddddddddddd`)
    .setFooter('无神论者的德雷克就像科学的计划一样')
    .setTimestamp()
    Blokes.send(UpdateEmbed)


  });
}

// This file is used to give users in the servers the bot is in a little update about new features. This command is now disused.
