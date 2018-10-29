exports.run = (client, message, args) => {
    let ball = Math.floor((Math.random() * 3) + 1);
    if (ball == 1)
    {
        message.channel.send("No").catch(console.error);
    }
    else if (ball == 2)
    {
        message.channel.send("Yes").catch(console.error);
    }
    else
    {
        message.channel.send("Maybe").catch(console.error);
    }
}