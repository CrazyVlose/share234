const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as  * [ " BC " ] servers! [ " ${client.guilds.size} " ]`);
  client.user.setStatus('dnd');
  });


client.on('guildMemberAdd', member => {
 console.log("he's ready now");
     member.createDM().then(function (channel1) {
          var test = setInterval (function (){
 channel1.send(`
حياك سمعنا صوتك الحلو :two_hearts::two_hearts:
https://discord.gg/fYKGPwc
`);

          },1000*60*5);

});
});



// Log our bot in
client.login(process.env.BOT_TOKEN);
