const Discord = require('discord.js');
const config = require('./config.json');

let bot = new Discord.Client();



let responseObject = {
	"uwotm8": "I'll fuck you up!",
	"dicks":  "Give them to Nathan",
	"anal": "24/7 bby"
}
bot.on("message", msg => {
	if(responseObject[msg.content]){
		msg.channel.sendMessage(responseObject[msg.content]);
	}
   

});

bot.on("ready", () => {
    console.log('Im ready!');
});

bot.login(config.token);
