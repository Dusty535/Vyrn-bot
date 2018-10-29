const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const client = new Discord.Client();
const config = require("./config.json");
client.config = config;
client.on("ready", (message) => {
  client.user.setActivity("fuir Katalina")
  var generalChannel = client.channels.get('505425489494540317')
  generalChannel.send("Hello, everyone !");
  generalChannel.send({files: ["./emo/here_goes.png"]});
  
});

client.on('ready', () => {
  // List servers the bot is connected to
  console.log("Servers:")
  client.guilds.forEach((guild) => {
      console.log(" - " + guild.name)

      // List all channels
      guild.channels.forEach((channel) => {
          console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
      })
  })
})
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

client.login(process.env.bot_token);
