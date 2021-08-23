const discord = require('discord.js');
const { MessageButton, MessageActionRow } = require("discord-buttons")

module.exports ={
    name: "rr",
     async execute(client, message, args) {
        const embed = new discord.MessageEmbed()
        .setTitle("ROL AL")
        .setColor("BLURPLE")
        .setFooter(`Turkish Templates`)
        .setThumbnail(client.user.displayAvatarURL())
       .setDescription('**Turkish Templates** \n\n Rolleri almak için butonlara bas! \n\n **Roller** \n\n Ücretsiz Templateri görmek İçin <:744218474112483358:861898340856496148>! \n Discord Oyunlarını göremek İçin 🎮! \n <#866346693100044289> kanalındaki çekilişleri görebilmek için 🎉 ')

        let add = new MessageButton()
        .setStyle("gray")
        .setLabel("Templates")
        .setID("AddRole")
        .setEmoji('857632364376227870')

        const add1 = new MessageButton()
        .setStyle("gray")
        .setLabel("Discord Game")
        .setID("add1")
        .setEmoji('🎮')
        
                const add2 = new MessageButton()
        .setStyle("gray")
        .setLabel("Çekiliş")
        .setID("add2")
        .setEmoji('🎉')
        const row = new MessageActionRow()
        .addComponent([add, add1, add2])

        message.channel.send({component: row, embed: embed})

        
    }
}
