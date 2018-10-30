exports.run = (client, message, args) => {
    message.guild.voiceConnection.disconnect();
}
