const Discord = require('discord.js')

function run(token, prefix) {

    const bot = new Discord.Client(); bot.login(token)

    if (!prefix) {}

    else {

        bot.once('ready', () => {
            console.log('Bot is ready')
        })

        bot.on('message', (m) => {

            if (m.content.startsWith(prefix)) {

                cmd = m.content.split(prefix)[1]
                function send(text) {m.channel.send(text)}

                if (cmd.startsWith('ping')) {
                    send('pong')
                }

            }

        })

    }

}

module.exports = { run }
