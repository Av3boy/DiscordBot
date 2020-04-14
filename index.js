const discord = require('discord.js');
const bot = new discord.Client;

const fs = require('fs');

var token = fs.readFileSync('.env', 'utf8');
token = token.split('=')[1];

bot.on('ready', () => {
    console.log('Fucknackk is online');
});

bot.on('message', (msg) =>{
    if (msg.content == 'Hello fucknackk') {
        msg.reply("Hello!");
    }
});

bot.login(token);