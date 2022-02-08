require('dotenv').config();

const { Client, Intents } = require('discord.js');
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

const { commands } = require('./commands');
const { 
    sendReactionImage, 
    getCommandList, 
    deleteBotLogs,
    replyToMessage 
} = require('./actions');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)
});

client.on('messageCreate', msg => {
    switch(true) {
        case msg.content === commands.ping.command:
            msg.reply('pong');
            break;
        case msg.content === commands.uwu.command:
            sendReactionImage(msg);
            break;
        case msg.content === commands.reply.command:
            replyToMessage(msg);
            break;
        case msg.content === commands.cleanup.command:
            deleteBotLogs(msg);
            break;
        case msg.content === commands.help.command:
            getCommandList(msg);
            break;
        default:
            return;
    }
});

client.login(process.env.CLIENT_TOKEN);