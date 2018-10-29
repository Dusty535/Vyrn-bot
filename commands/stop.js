exports.run = (client, message, args) => {
    var voiceChannel = (message.guild.channels
        .filter(function (channel) { return channel.type === 'voice' })
        .first())
    voiceChannel.leave()
}

  