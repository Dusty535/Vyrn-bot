const YoutubeStream = require("ytdl-core")

exports.run = (client, message, args) => {
  if (args.length == 0 || args.length >= 2) {
    message.reply("Please link a Youtube video")
    return;
  }
  if (!message.member.voiceChannel){
    message.reply("You must me in a voice channel")
    return;
  }
    var voiceChannel = message.member.voiceChannel
 
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
