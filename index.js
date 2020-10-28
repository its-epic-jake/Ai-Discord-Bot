const discord = require("discord.js");
const client = new discord.Client();
const alexa = require("alexa-bot-api");
var chatbot = new alexa("aw2plm");
const prefix = "K!";
const sendto = "740131687857651712";
const TOKEN = 'YOUR TOKEN HERE';

client.on("ready", () => {
  console.log("ready");
});

client.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.name === "ai-chat") {
    let content = message.content;
    chatbot.getReply(content).then(r => message.channel.send(r));
  }
});

client.login(TOKEN);
