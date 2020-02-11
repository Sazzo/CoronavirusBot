const Discord = require('discord.js'); 
const request = require('request')
const config = require('./config.json')
const client = new Discord.Client(); client.on('ready', () => { 
console.log(`Logged in as ${client.user.tag}!`); }); client.on('message', msg => { 
if (msg.content === 'cv.status') { 
const url = "https://coronavirus-tracker-api.herokuapp.com/confirmed"

request(url, function (err, response, body) { 
if (err) return msg.reply("ERR") 
body = JSON.parse(body) 

msg.reply(`Confirmed: **${body.latest}**`)
})
}
})
client.login(config.token);