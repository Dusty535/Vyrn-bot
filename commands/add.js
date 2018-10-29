exports.run = (client, message, args) => {
    if (args.length < 2 ){
        message.channel.send("You can't add just one number :(")
        return;
    }
    let result = 0
    args.forEach(number => {
        result += parseFloat(number);
    });
    message.channel.send("Result: "+result).catch(console.error);
}
