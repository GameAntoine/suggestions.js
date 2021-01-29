const Discord = require("discord.js");

const { prefix, version, couleur } = require('../config.json')

exports.run = async (client, message, args, level) => {

    let embed444 = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setThumbnail(client.user.displayAvatarURL())
        .setColor(couleur)
        .setTitle("<a:1603_Animated_Cross:770572023973543936> | Erreur de commande !")
        .setDescription(`Merci d'écrire votre sondage. \n \`${prefix}suggestion Possible de faire une animation ?\` `)
        .setFooter(version)

    if (!args[0]) return message.channel.send(embed444)

        let embed1 = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setThumbnail(client.user.displayAvatarURL())
        .setColor(couleur)
        .setTitle("<:9375_Information:770572023390928896> | suggestion !")
        .setDescription(args.join(" ") + `\n\n** » Cliquez sur la réaction <a:6093_Animated_Checkmark:770572024640045076> ou <a:1603_Animated_Cross:770572023973543936> pour réagir à cette suggestion !** `)
        .setFooter(version)

            message.channel.send(embed1)
               .then(function (msg) {
                   msg.react("<a:6093_Animated_Checkmark:770572024640045076>").then(() => {
                       msg.react("<a:1603_Animated_Cross:770572023973543936>");
                   }).catch(function (e) {
                       console.log(e)

                       let embed777 = new Discord.MessageEmbed()
                        .setAuthor(message.author.tag, message.author.displayAvatarURL())
                        .setThumbnail(client.user.displayAvatarURL())
                        .setColor(couleur)
                        .setTitle("<a:1603_Animated_Cross:770572023973543936> | Erreur de commande !")
                        .setDescription(`**Une erreur est survenue lors de la mise en place des émoticones en dessous de la suggestion  , veuillez vérifier les permissions \`Use External Emojis\` et \`Add Reactions\`**`)
                        .setFooter(version)

                       message.channel.send(embed777)
                   });
               }).catch((err) => {
                   return message.channel.send("**<a:608230977075937280:712053299527942145> | Une erreur est survenue**");
               });
           message.delete()
};

module.exports.help = {
    name:'suggestion',
    aliases: ['suggestion'],
    category: 'information',
    description: "Crée une suggestion.",
    cooldown: 10,
}
