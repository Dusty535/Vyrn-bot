const YoutubeStream = require("ytdl-core")

exports.run = (client, message, args) => {
  if (args.length == 0 || args.length >= 2) {
    message.reply("Please link a Youtube video")
    return;
  }
    var voiceChannel = message.guild.channels
      .filter(function (channel) { return channel.type === 'voice' })
      .first()
  // On récupère les arguments de la commande 
  // il faudrait utiliser une expression régulière pour valider le lien youtube
  // On rejoint le channel audio
  voiceChannel
  .join()
  .then(function(connection) {
    try{
    let stream = YoutubeStream(args[0])
    connection.playStream(stream).on('end', function() {
    connection.disconnect()
    message.channel.send("I'm done")
  })
  } catch (e) {
    message.reply("What is this link dude :angry:")
    connection.disconnect()
  }
})
}