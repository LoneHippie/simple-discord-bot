const prefix = '!funbot'

const commands = {
    ping: {
        command: `${prefix} ping`,
        description: 'Get a fun ping pong reply from funbot!'
    },
    uwu: {
        command: `${prefix} uwu`,
        description: 'Sends a random anime reaction image to the channel'
    },
    help: {
        command: `${prefix} commands`,
        description: 'Get list of commands currently available for funbot'
    },
    cleanup: {
        command: `${prefix} cleanup`,
        description: 'Delete all bot messages and user commands for funbot from the current channel'
    }
}

const commandList = () => {
    let str = '';

    for (const command in commands) {
        str += `${commands[command].command}: ${commands[command].description} \n`
    }

    return str;
}

module.exports = { commands, commandList, prefix }