const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`mute` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muteli');
  if (!muteRole) return message.reply('`Muteli` adlı bir rol bulamıyorum.').catch(console.error);
  if (reason.length < 1) return message.reply('Susturma sebebini yazmalısın.').catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('Kimi susturacağını yazmalısın.').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor('Eylem: Mute')
            .addField('**Kullanıcı**', `<@${user.id}>`)
            .addField('**Sebep**', `${reason}`)
            .addField('**Moderatör**',`${message.author.username}#${message.author.discriminator}`)
            .setColor('RANDOM');
  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('Gerekli izinlere sahip değilim.').catch(console.error);

  if (message.guild.member(user).roles.has(muteRole.id)) {
    message.guild.member(user).removeRole(muteRole).then(() => {
      return message.channel.send(embed).catch(console.error);
    });
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
     return message.channel.send(embed).catch(console.error);
    });
  }

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'mute',
  description: 'İstediğiniz kişiyi  susturur.',
  usage: 'mute [kullanıcı] [sebep]'
};
   