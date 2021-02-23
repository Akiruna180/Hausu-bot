const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = ("/")
const string1 = "https://zupimages.net/up/21/08/lz7a.png"
const embedbvn = new Discord.MessageEmbed();


bot.on("ready", async () =>{
    console.log("Le bot est allumé")
    bot.user.setStatus("online")
    bot.user.setActivity("Akiruna", {type: 'LISTENING'});
})

bot.on("guildMemberAdd", member => {
    
    const emote = bot.emojis.cache.find(e => e.id === "743221002929963039")
    bot.channels.cache.get('697136772739629138').send(embedbvn.setDescription(`${emote} Oh! Un nouveau membre est arrivé parmi nous !\n${emote} C'est ${member} !\n\n > • Accueillez-le/la chaleureusement (｡•̀ᴗ-)✧ !.`).setColor('#a2db73').setImage(string1));


})


bot.on('message', message =>{

    
if(message.content === prefix + "help") message.channel.send("Commande en cours de programmation...")
 if(message.content.startsWith(prefix + 'clear')){
    message.delete();
    
  if(message.member.hasPermission('MANAGE_MESSAGES')){
       
     let args = message.content.trim().split(/ +/g);
    
     if(args[1]){
     
         if(!isNaN(args[1]) && args[1] >= 1 && args[1] <= 99){

           message.channel.bulkDelete(args[1])
           message.channel.send(`Les ${args[1]} messages ont bien été supprimés !`)
         
         
         }
         
         else{
         
         message.channel.send(`Vous devez indiquer une valeur entre 1 et 99 !`);
         }
      
     }
     else{

         message.channel.send(`Vous devez indiquer un nombre de message à supprimer !`); 
     }

 }
 else{

  message.channel.send(`Vous devez avoir la permission de gérer les messages pour éxécuter cette commande ! !`); 
 

}

}

})



bot.login(process.env.TOKEN);