const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Hemen Diyorum Abi 1 Saniye..').then(message => {
   var espriler = [' **Senin Malafatın  18CM ** :flushed: ' ,'**Senin Malafatın  11CM ** :flushed:' ,'**Senin Malafatın 32CM  ** :flushed:' ,'**Senin Malafatın  35CM ** :hot_face:' ,'**Senin Malafatın  8CM  ** :flushed:' ,'**Senin Malafatın  65CM  ** :flushed:' ,'**Senin Malafatın 5CM  ** :flushed:' ,'**Senin Malafatın 31CM  ** :flushed:' ,'**Senin Malafatın  14CM ** :flushed:' ,'**Senin Malafatın  1CM ** :flushed:','**Senin Malafatın  3CM ** :flushed:','**Senin Malafatın  4CM ** :flushed:','**Senin Malafatın  2CM ** :flushed:','**Senin Malafatın  6CM ** :flushed:','**Senin Malafatın  7CM ** :flushed:','**Senin taşşaklarına kurban  19849CM ** :hot_face:'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kaçcm', 'cmkaç', 'kaç-cm', 'cm-kaç'],
  permLevel: 0
};

exports.help = {
  name: 'kaçcm',
  description: 'Malafatını Söyler.',
  usage: 'kaçcm'
};