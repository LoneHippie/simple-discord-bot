const reactions = require('./reactionImages');
const { commandList, prefix } = require('./commands');

const sendReactionImage = (message) => {
    message.channel.send(
        reactions[Math.floor(Math.random() * reactions.length)]
    )
};

const getCommandList = (message) => {
    message.reply(
        `Hey ${message.author.username}! Here's a handy list of commands you can try: \n\n${commandList()}`
    )
};

const deleteChatLog = async(message) => {
    let msg_size = 100;

    while (msg_size == 100) {
        await message.channel.bulkDelete(100)
            .then(messages => msg_size = messages.size)
            .catch(console.error);
    }
};

const deleteBotLogs = async(message) => {
    const channel = message.channel;
    const messages = await channel.messages.fetch({limit: 100});

    messages.forEach(msg => {
        if (msg.author.bot || msg.content.startsWith(prefix)) { 
            msg.delete() 
        }
    })
};

const replyToMessage = async(message) => {
    if (message.type !== 'REPLY') {
        message.channel.send('Command must be used within a Reply to another message');
        return;
    }

    const replyMessage = await message.channel.messages.fetch(message.reference.messageId);

    let memeMessage = '';

    for (let i = 0; i < replyMessage.content.length; i++) {
        i % 2 === 0 ? (
            memeMessage += replyMessage.content[i].toLowerCase()
        ) : (
            memeMessage += replyMessage.content[i].toUpperCase()
        )
    }

    replyMessage.reply(memeMessage)
};

module.exports = {
    sendReactionImage,
    getCommandList,
    deleteChatLog,
    deleteBotLogs,
    replyToMessage
};