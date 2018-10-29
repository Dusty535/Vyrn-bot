exports.run = (client, message, args) => {
    if (args.length < 2 ){
        message.channel.send("You can't substract just one number :(")
        return;
    }
    let result = args[0]*2
    args.forEach(number => {
        result = result - parseFloat(number);
    });
    message.channel.send("Result: "+result).catch(console.error);
}
