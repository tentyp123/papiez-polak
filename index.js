const express = require("express")
const app = express();

app.listen(3000, () => {
  console.log("Papież zmartwychwstał!")
})

app.get("/", (req, res) => {
  res.send("");
})

const Discord = require("discord.js")
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.on("message", message => {
  if (message.content === "2137") {
    message.channel.send("auuuuuuu")
  }
})

client.on("message", message => {
  if (message.content === "a jak pan jezus powiedział?") {
    message.channel.send("tak jak pan jezus powiedział")
  }
})

client.on("message", message => {
  if (message.content === "po co mam wybierać") {
    message.channel.send("najlepiej zabrać obie")
  }
})

client.on("message", message => {
  if (message.content === "okrutnik") {
    message.channel.send("można powiedzieć że to jest że to jest jakby to powiedzieć, okrutnik no")
  }
})

client.on("message", message => {
  if (message.content === "jp2gmd") {
    message.channel.send("jeszcze jak!")
  }
})

client.on("message", message => {
  if (message.content === "wapiesz") {
    message.channel.send("kremówkuj z tym")
  }
})

client.on("message", message => {
  if (message.content === "papieżowa") {
    message.channel.send("@everyone 21:37")
  }
})

client.login(process.env.token);