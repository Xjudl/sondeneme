const dc = require("discord.js")
exports.run = async(client, message, args) => {
  if(!message.member.hasPermission("ADMİNİSTRATOR")) return;
  let channelp = message.channel.parentID
 message.channel.delete(message.channel).then
  message.channel.clone().then(z => {
    let kanal = z.guild.channels.cache.find(c => c.name === z.name)
    kanal.setParent(
    kanal.guild.channels.cache.find(channel => channel.id === channelp))
    const embed = new dc.MessageEmbed()
    .setAuthor(' Bu Kanal ' + message.author.username + ' Tarafından Patlatıldı! ' )
    .setColor("202225")
    .setImage("https://alparslan53.meb.k12.tr/meb_iys_dosyalar/53/02/703504/dosyalar/2020_12/14100414_Patlama.gif")
    z.send(embed)
    })
  };
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ["nuke"],
  permLevel: 0
}
exports.help = {
  name: "nuke"
  }