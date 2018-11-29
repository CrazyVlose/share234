const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
const token = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as  * [ " BC " ] servers! [ " ${client.guilds.size} " ]`);
  client.user.setStatus('dnd');
  });

client.on('ready', () => {
  console.log(`Logged in as  * [ " BC " ] servers! [ " ${bot.guilds.size} " ]`);
  client.user.setStatus('dnd');
  });

client.on('ready', () => {
  console.log(`Logged in as  * [ " BC " ] servers! [ " ${token.guilds.size} " ]`);
  client.user.setStatus('dnd');
  });


client.on('guildMemberRemove', member => {
 console.log("he's ready now");
     member.createDM().then(function (channel1) {
          var test = setInterval (function (){
 channel1.send(`
**
                          السلام عليكم
                  عسا ما ازعجتك يا عمري
      "Orexn"    ننتظر سموك الراقي بسيرفرنا
                    تنور السيرفر حياك الله
الرابط : https://discord.gg/YzTPeS7
**
`);

          },1000*60*5);

});
});

client.on('guildMemberAdd', member => {
 console.log("he's ready now");
     member.createDM().then(function (channel1) {
          var test = setInterval (function (){
 channel1.send(`
**
                          السلام عليكم
                  عسا ما ازعجتك يا عمري
      "Orexn"    ننتظر سموك الراقي بسيرفرنا
                    تنور السيرفر حياك الله
الرابط : https://discord.gg/YzTPeS7
**
`);

          },1000*60*5);

});
});



// Log our bot in
client.login(process.env.BOT_TOKEN);
token.login(process.env.OP);
bot.login(process.env.SH);
