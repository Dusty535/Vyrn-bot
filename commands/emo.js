exports.run = (client, message, args) => {
if (args.length ==0){
    message.channel.send("https://gbf.wiki/Stickers#English");
}
if (args == 'list'){
message.channel.send('Mdr t'a cru il y a BEAUCOUP d'émotes go sur https://gbf.wiki/Stickers#English')
  
}
const fs = require('fs');
let path = "./emo/"+args+".png"
let remp = /,/gi
path = path.replace(remp, '_')
if (fs.existsSync(path)) {
    message.channel.send({files: [path]});
}
else {
    return;
}
}

  
