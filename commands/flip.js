exports.run = (client, message, args) => {
    let random = Math.floor((Math.random() * 2));
    if (random == 1){
        message.channel.send("Tails !").catch(console.error);
    }
    else {
        message.channel.send("Heads !").catch(console.error);
    }
 
}