exports.run = (client, message, args) => {
    if (args.length < 2 ){
        message.channel.send("You can't multiply just one number :(")
        return;
    }
    let result = 1
    args.forEach(number => {
        result *= parseFloat(number);
    });
    message.channel.send("Result: "+result).catch(console.error);
}
