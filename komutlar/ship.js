const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
const Canvas = require("canvas")
const { registerFont, createCanvas } = require('canvas')

exports.run = async (client, message, args) => {
  const canvas = Canvas.createCanvas(512, 256);
  const ctx = canvas.getContext("2d");
 
 let member1 = message.mentions.members.first()
 let member = message.author
     if(!member1) {message.channel.send("Birisini Etiketler Misin :)")} else{

       var randomoran = Math.floor(Math.random() * 101);
       
//if(member.id = "818195412388413474") {var randomoran = Math.floor(Math.random() * (100 - 76 + 1)) + 76 } else { var randomoran = Math.floor(Math.random() * 101); }
           
       
  const background = await Canvas.loadImage(`https://cdn.discordapp.com/attachments/934825732100722709/937708651211292714/idiot_squad_by_shyassasain_d9jxxlz-fullview-removebg-preview.png`);
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
let kalpp = "https://cdn.discordapp.com/attachments/934825732100722709/937707577742090240/1111px-Love_Heart_symbol.svg-removebg-preview.png"
let logo2 = message.author.avatarURL({format: "png"}) || message.author.defaultAvatarURL({format: "png"})
         let logo1 = member1.user.avatarURL({format: "png"}) || member1.user.defaultAvatarURL({format: "png"})
       console.log(logo1)
       console.log(logo1)
       const member1logo = await Canvas.loadImage(logo1);
     ctx.drawImage(member1logo, 266, 14, 228, 228) 
       const member2logo = await Canvas.loadImage(logo2);
     ctx.drawImage(member2logo, 14, 14, 228, 228)
              const kalp = await Canvas.loadImage(kalpp);
     ctx.drawImage(kalp, 204, 76, 104, 104)
  ctx.fillStyle = "#fff";
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = "32px American-Captain";
   // TAKIMLAR // 
  ctx.fillText(`%${randomoran}`, 256, 120);
  const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "");
  message.channel.send(attachment);
 
 

}

};

exports.conf = {
  aliases: ['ship'],
  permLevel: 0,
  kategori: 'Moderasyon'
};

exports.help = {
  name: 'ship',
  description: 'Belirttiğiniz kişiyi sunucudan yasaklar.',
  usage: 'ban <@kullanıcı> <sebep>',

};