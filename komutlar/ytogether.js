const discord = require('discord.js');
const client = new discord.Client();

const fetch = require('node-fetch')

exports.run = async (client, message, args) => {
  if(!message.member.voice.channel) return message.channel.send('Lütfen bir ses kanalına girip tekrar deneyin.')

fetch(`https://discord.com/api/v8/channels/${message.member.voice.channel.id}/invites`, {
                    method: "POST",
                    body: JSON.stringify({
                        max_age: 86400,
                        max_uses: 0,
                        target_application_id: "880218394199220334",
                        target_type: 2,
                        temporary: false,
                        validate: null
                    }),
                    headers: {
                        "Authorization": `Bot ${client.token}`,
                        "Content-Type": "application/json"
                    }
                })
                .then(res => res.json())
                .then(invite => {
      
let embed = new discord.MessageEmbed()
.addField(`TRjudl`,`[Youtubeyi Açmak İçin Buraya Tıkla](https://discord.gg/${invite.code})`)
message.channel.send(embed)
                    
                })

  
                

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'youtube'
};