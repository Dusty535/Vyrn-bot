exports.run = (client, message, args) => {
    if (args.length == 0){
        let n =100
        let random = Math.floor((Math.random() * n) + 1);
        message.channel.send(random).catch(console.error);
    }
    else if (args.length == 1){
        let n = args
        let random = Math.floor((Math.random() * n) + 1);
        message.channel.send(random).catch(console.error);
    }
    else {
        message.channel.send("You can't roll more than one number :angry:").catch(console.error);
    }
   
}