const Discord = require('discord.js');
const { stripIndents } = require('common-tags');

exports.run = (client, msg, args) => {
  var kullanıcı = msg.mentions.users.first() || message.author


let x;
    let x2;
    let x3;
    let x4;
    let x5;
    let x6;
    let x7;
    let x8;
    let x9;
    let x10;
    let x11;
    //TRjudl 
    //yönetici
    if (kullanıcı.hasPermission("ADMINISTRATOR")) x = "+"
    if (!kullanıcı.hasPermission("ADMINISTRATOR")) x = "-"
    
    //Denetim kaydı
    if (kullanıcı.hasPermission("VIEW_AUDIT_LOG")) x2 = "+"
    if (!kullanıcı.hasPermission("VIEW_AUDIT_LOG")) x2 = "-"
    
    //Sunucuyu yönet
    if (kullanıcı.hasPermission("MANAGE_GUILD")) x3 = "+"
    if (!kullanıcı.hasPermission("MANAGE_GUILD")) x3 = "-"
    //TRjudl 
    //Rolleri yönet
    if (kullanıcı.hasPermission("MANAGE_ROLES")) x4 = "+"
    if (!kullanıcı.hasPermission("MANAGE_ROLES")) x4 = "-"
    
    //Kanalları yönet
    if (kullanıcı.hasPermission("MANAGE_CHANNELS")) x5 = "+"
    if (!kullanıcı.hasPermission("MANAGE_CHANNELS")) x5 = "-"
    
    //üyeleri at
    if (kullanıcı.hasPermission("KICK_MEMBERS")) x6 = "+"
    if (!kullanıcı.hasPermission("KICK_MEMBERS")) x6 = "-"
    
    //üyeleri yasakla
    if (kullanıcı.hasPermission("BAN_MEMBERS")) x7 = "+"
    if (!kullanıcı.hasPermission("BAN_MEMBERS")) x7 = "-"
    
    //mesajları yönet
    if (kullanıcı.hasPermission("MANAGE_MESSAGES")) x8 = "+"
    if (!kullanıcı.hasPermission("MANAGE_MESSAGES")) x8 = "-"
    
    //kullanıcı adlarını yönet
    if (kullanıcı.hasPermission("MANAGE_NICKNAMES")) x9 = "+"
    if (!kullanıcı.hasPermission("MANAGE_NICKNAMES")) x9 = "-"
    
    //emojileri yönet
    if (kullanıcı.hasPermission("MANAGE_EMOJIS")) x10 = "+"
    if (!kullanıcı.hasPermission("MANAGE_EMOJIS")) x10 = "-"
    
    //webhookları yönet
    if (kullanıcı.hasPermission("MANAGE_WEBHOOKS")) x11 = "+"
    if (!kullanıcı.hasPermission("MANAGE_WEBHOOKS")) x11 = "-"
    //TRjudl 
    msg.channel.send(`
    \`\`\`diff
    ${x} Yönetici
${x2} Denetim Kaydını Görüntüle
${x3} Sunucuyu Yönet
${x4} Rolleri Yönet
${x5} Kanalları Yönet
${x6} Üyeleri At
${x7} Üyeleri Yasakla
${x8} Mesajları Yönet
${x9} Kullanıcı Adlarını Yönet
${x10} Emojileri Yönet
${x11} Webhook'ları Yönet
\`\`\`
   `)
  msg.channel.send("```md\n# Başında \"-\" olanlar o yetkiye sahip olunmadığını gösterir. \n# Başında \"+\" olanlar o yetkiye sahip olunduğunu gösterir. \n```")
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ytk'],
  permLevel: 0,//TRjudl 
    kategori: "kullanıcı"
};

exports.help = {
  name: 'yetkilerim',
  description: 'Yetkilerini Gösterir',
  usage: '/yetkilerim'
};