exports.run = (client, message, args) => {
    if(args.length == 0) {
    message.channel.send("https://gbf.wiki/").catch(console.error);
    }
    else {
        let link = "https://gbf.wiki/"+args
        var remp = /,/gi
message.channel.send(link.replace(remp, '_')).catch(console.error);
    }
}

// Only work with capital letters on the first letter of each args