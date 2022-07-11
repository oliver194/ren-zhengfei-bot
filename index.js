const axios = require('axios');
const Discord = require("discord.js");
const client = new Discord.Client({ intents: 32767 });

var CAT_IMAGES_CHANNEL = "YOUR_CHANNEL_ID";

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'ping') {
        await interaction.reply('Pong!');
    }
});


client.on('messageCreate', (message) => {

    // Set prefix, ignore message if doesn't start with prefix
    const prefix = "!";
    if (!message.content.startsWith(prefix)) return;

    if (message.content === `${prefix}test`) {
        message.channel.send("test");
        message.react("🤩");
    }

    // bot info
    if (message.content === `${prefix}botinfo`) {

        message.channel.send("Guilds: " + client.guilds.fetch(message.guildId));
        console.log(message.guildId);

    }
    // cat.
    if (message.content === `${prefix}cat`) {

        if (message.channelId != CAT_IMAGES_CHANNEL) {
            message.delete();
        } else {
            axios.get('https://aws.random.cat/meow.php').then(resp => { message.channel.send(resp.data.file) });
        }
        
    }

    // repeats whatever the user says
    if (message.content.startsWith === `${prefix}say`) {

        var msgCnt = message.content.
        console.log(msgCnt);
        var sayCnt = msgCnt.split(' ');
        console.log(sayCnt);

    }

});

client.login('YOUR_TOKEN_HERE');