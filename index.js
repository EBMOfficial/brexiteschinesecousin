const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
	return response.sendFile('index.html', { root: '.' });
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

// ================= START BOT CODE ===================
const Discord = require('discord.js')
const client = new Discord.Client()
client.login(process.env.TOKEN)
client.setMaxListeners(10000000);
var date = new Date().toLocaleString();
const update = require('./update.js')


 

client.on('ready', () => {

  console.log("Connected as " + client.user.tag)


  setInterval(() => { 
    const memberCount = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)
    client.user.setActivity(`地狱厨房是一部在中国大连市拍摄的自然纪录片。 戈登·拉姆齐（Gordon Ramsay）是该纪录片的主角。 在此过程中，他将指导您如何在卷烟流行中生存，并为您提供有关如何破解中国政府大型机的各种技术提示。`, { type: "WATCHING" })
  }, 500);


  client.guilds.cache.forEach((guild) => {
    console.log(guild.name)
    //guild.channels.cache.forEach((channel) => {
      //console.log(`${channel.name} ${channel.type} ${channel.id}`)
    //})

  });  
  // update(client)
  
 
  

  const talkedRecently = new Set(); 
    client.on('message', async message => {
      if (!message.guild) return;
      if (message.author.bot) return;
  if (!message.channel.type === 'dm') return;
        const JixawServer = client.guilds.cache.get('770088744510029874') // This is the server's Guild ID. 
        const Men = client.channels.cache.get('770244707551936532') // This variable enables the bot to pull the channel's ID from it's channels array.
        const Blokes = message.guild.channels.cache.get('770244707551936532') // This variable enables the bot to pull the channel's id from the message.guild's channels array. 
        
        if (message.channel.id === '770244707551936532') {
        if (message.attachments.size > 0) {
          if (talkedRecently.has(message.author.id)) {
            message.delete().catch(err => console.log(err));
             message.channel.send("You must wait 30 seconds before sending another attachment - " + message.author.username).then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            }).catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
            
          } else {
       // Adds the user to the set so that they can't send attachments for 30 seconds
       if (message.member.hasPermission('ADMINISTRATOR')) {
         console.log(`${message.author.username} has administrator privileges, as a result they are exempt from the image cooldown.`)
       } else talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after 30 seconds
        
          talkedRecently.delete(message.author.id);
        }, 30000);
       }
        } else if (message.content.includes('.jpg')) {
                  
                  if (talkedRecently.has(message.author.id)) {
                    message.delete().catch(err => console.log(err))
             message.channel.send("You must wait 30 seconds before sending another attachment - " + message.author.username).then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            }).catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
            
          } else {
       // Adds the user to the set so that they can't send attachments for 30 seconds
        if (message.member.hasPermission('ADMINISTRATOR')) {
         console.log(`${message.author.username} has administrator privileges, as a result they are exempt from the image cooldown.`)
       } else talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after 30 seconds
        
          talkedRecently.delete(message.author.id);
        }, 30000);
            } 
            } else if (message.content.includes('.png')) {
                  
                  if (talkedRecently.has(message.author.id)) {
                    message.delete().catch(err => console.log(err))
             message.channel.send("You must wait 30 seconds before sending another attachment - " + message.author.username).then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            }).catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
            
          } else {
       // Adds the user to the set so that they can't send attachments for 30 seconds
        if (message.member.hasPermission('ADMINISTRATOR')) {
         console.log(`${message.author.username} has administrator privileges, as a result they are exempt from the image cooldown.`)
       } else talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after 30 seconds
        
          talkedRecently.delete(message.author.id);
        }, 30000);
            } 
            } else if (message.content.includes('.jpeg')) {
              if (talkedRecently.has(message.author.id)) {
                    message.delete().catch(err => console.log(err))
             message.channel.send("You must wait 30 seconds before sending another attachment - " + message.author.username).then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            }).catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
            
          } else {
       // Adds the user to the set so that they can't send attachments for 30 seconds
        if (message.member.hasPermission('ADMINISTRATOR')) {
         console.log(`${message.author.username} has administrator privileges, as a result they are exempt from the image cooldown.`)
       } else talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after 30 seconds
        
          talkedRecently.delete(message.author.id);
        }, 30000);
            } 
            } else if (message.content.includes('.jfif')) {
              if (talkedRecently.has(message.author.id)) {
                    message.delete().catch(err => console.log(err))
             message.channel.send("You must wait 30 seconds before sending another attachment - " + message.author.username).then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            }).catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
            
          } else {
       // Adds the user to the set so that they can't send attachments for 30 seconds
        if (message.member.hasPermission('ADMINISTRATOR')) {
         console.log(`${message.author.username} has administrator privileges, as a result they are exempt from the image cooldown.`)
       } else talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after 30 seconds
        
          talkedRecently.delete(message.author.id);
        }, 30000);
            } 
            } else if (message.content.includes('.mp4')) {
              if (talkedRecently.has(message.author.id)) {
                    message.delete().catch(err => console.log(err))
             message.channel.send("You must wait 30 seconds before sending another attachment - " + message.author.username).then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            }).catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
            
          } else {
       // Adds the user to the set so that they can't send attachments for 30 seconds
        if (message.member.hasPermission('ADMINISTRATOR')) {
         console.log(`${message.author.username} has administrator privileges, as a result they are exempt from the image cooldown.`)
       } else talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after 30 seconds
        
          talkedRecently.delete(message.author.id);
        }, 30000);
            } 
            } else if (message.content.includes('.mov')) {
              if (talkedRecently.has(message.author.id)) {
                    message.delete().catch(err => console.log(err))
             message.channel.send("You must wait 30 seconds before sending another attachment - " + message.author.username).then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            }).catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
           
          } else {
       // Adds the user to the set so that they can't send attachments for 30 seconds
       if (message.member.hasPermission('ADMINISTRATOR')) {
         console.log(`${message.author.username} has administrator privileges, as a result they are exempt from the image cooldown.`)
       } else talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after 30 seconds
        
          talkedRecently.delete(message.author.id);
        }, 30000);
            } 
            } else if (message.content.includes('.avi')) {
              if (talkedRecently.has(message.author.id)) {
                    message.delete().catch(err => console.log(err))
             message.channel.send("You must wait 30 seconds before sending another attachment - " + message.author.username).then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            }).catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
           
          } else {
       // Adds the user to the set so that they can't send attachments for 30 seconds
        if (message.member.hasPermission('ADMINISTRATOR')) {
         console.log(`${message.author.username} has administrator privileges, as a result they are exempt from the image cooldown.`)
       } else talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after 30 seconds
        
          talkedRecently.delete(message.author.id);
        }, 30000);
            } 
            } else if (message.content.includes('.webm')) {
              if (talkedRecently.has(message.author.id)) {
                    message.delete().catch(err => console.log(err))
             message.channel.send("You must wait 30 seconds before sending another attachment - " + message.author.username).then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            }).catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
            
          } else {
       // Adds the user to the set so that they can't send attachments for 30 seconds
        if (message.member.hasPermission('ADMINISTRATOR')) {
         console.log(`${message.author.username} has administrator privileges, as a result they are exempt from the image cooldown.`)
       } else talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after 30 seconds
        
          talkedRecently.delete(message.author.id);
        }, 30000);
            } 
            } else if (message.content.includes('.gif')) {
              if (talkedRecently.has(message.author.id)) {
                    message.delete().catch(err => console.log(err))
             message.channel.send("You must wait 30 seconds before sending another attachment - " + message.author.username).then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            }).catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
            
          } else {
       // Adds the user to the set so that they can't send attachments for 30 seconds
        if (message.member.hasPermission('ADMINISTRATOR')) {
         console.log(`${message.author.username} has administrator privileges, as a result they are exempt from the image cooldown.`)
       } else talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after 30 seconds
        
          talkedRecently.delete(message.author.id);
        }, 30000);
            } 
            } else if (message.content.includes('.html')) {
              if (talkedRecently.has(message.author.id)) {
                    message.delete().catch(err => console.log(err))
             message.channel.send("You must wait 30 seconds before sending another attachment - " + message.author.username).then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            }).catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
            
          } else {
       // Adds the user to the set so that they can't send attachments for 30 seconds
        if (message.member.hasPermission('ADMINISTRATOR')) {
         console.log(`${message.author.username} has administrator privileges, as a result they are exempt from the image cooldown.`)
       } else talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after 30 seconds
        
          talkedRecently.delete(message.author.id);
        }, 30000);
            } 
            } else if (message.content.includes('.org')) {
              if (talkedRecently.has(message.author.id)) {
                    message.delete().catch(err => console.log(err))
             message.channel.send("You must wait 30 seconds before sending another attachment - " + message.author.username).then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            }).catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
            
          } else {
       // Adds the user to the set so that they can't send attachments for 30 seconds
       if (message.member.hasPermission('ADMINISTRATOR')) {
         console.log(`${message.author.username} has administrator privileges, as a result they are exempt from the image cooldown.`)
       } else talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after 30 seconds
        
          talkedRecently.delete(message.author.id);
        }, 30000);
            } 
            } else if (message.content.includes('https://tenor.com/view/')) {
              if (talkedRecently.has(message.author.id)) {
                    message.delete().catch(err => console.log(err))
             message.channel.send("You must wait 30 seconds before sending another attachment - " + message.author.username).then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            }).catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
            
          } else {
       // Adds the user to the set so that they can't send attachments for 30 seconds
       if (message.member.hasPermission('ADMINISTRATOR')) {
         console.log(`${message.author.username} has administrator privileges, as a result they are exempt from the image cooldown.`)
       } else talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after 30 seconds
        
          talkedRecently.delete(message.author.id);
        }, 30000);
            } 
            } else if (message.content.includes('https://cdn.discordapp.com/attachments')) {
              if (talkedRecently.has(message.author.id)) {
                    message.delete().catch(err => console.log(err))
             message.channel.send("You must wait 30 seconds before sending another attachment - " + message.author.username).then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            }).catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
            
          } else {
       // Adds the user to the set so that they can't send attachments for 30 seconds
        if (message.member.hasPermission('ADMINISTRATOR')) {
         console.log(`${message.author.username} has administrator privileges, as a result they are exempt from the image cooldown.`)
       } else talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after 30 seconds
        
          talkedRecently.delete(message.author.id);
        }, 30000);
            } 
            } else if (message.content.includes('https://www.youtube.com/watch')) {
              if (talkedRecently.has(message.author.id)) {
                    message.delete().catch(err => console.log(err))
             message.channel.send("You must wait 30 seconds before sending another attachment - " + message.author.username).then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            }).catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
            
          } else {
       // Adds the user to the set so that they can't send attachments for 30 seconds
        if (message.member.hasPermission('ADMINISTRATOR')) {
         console.log(`${message.author.username} has administrator privileges, as a result they are exempt from the image cooldown.`)
       } else talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after 30 seconds
        
          talkedRecently.delete(message.author.id);
        }, 30000);
            } 
            }


      
      
    
    
    



 
        
        
        
  

        }
    });

    client.on('message', async message => {
      if (message.channel.id === '770097110993338465') {
      if (message.mentions.has(client.user)) {
        var outcomes = ["sod off", "sparky is my beloved", "jixaw smells", "can you please jump off the roof of a Peugeot 206", "kindly j", ":trole:", "xd", "hi :)", "ok", "You live is two yeal", "https://www.youtube.com/watch?v=HRz044ohO-c", "have a smike", "just smell off already", "cheers", "decent price lads", "https://cdn.discordapp.com/attachments/847510765979303956/847632371356532757/caption.gif", "https://cdn.discordapp.com/attachments/835666953603514370/842056350166941736/unknown.png"];
        let outcomesIndex = Math.round(Math.random() * outcomes.length);
        message.channel.send(outcomes[outcomesIndex])
    
      }
      }
       
    })
    
});
