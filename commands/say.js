exports.run = (client, message, args) => {
    message.delete()
    let remp = '!say'
    let mess = message.content
    message.channel.send(mess.replace(remp, '')).catch(console.error);
}