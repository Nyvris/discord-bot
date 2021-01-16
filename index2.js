const Discord = require('discord.js');
const bot = new Discord.Client();
const token = require("./token2.json")


bot.on("ready", async () =>{
    console.log("Le bot est en ligne");
    bot.user.setStatus("online");
    bot.user.setActivity("En train de se configurer", {type: 'STREAMING'} );
})



bot.login("Nzk5Nzg4NDE3MDA4OTI2Nzgw.YAIrAQ.f3PhDx7E2q-JjcVHF04esutIG3o");




client.login(process.env.TOKEN);