const axios = require('axios');
const Discord = require("discord.js");
const client = new Discord.Client({ intents: 32767 });
const r2 = require('r2');

// other vars
const CAT_API_URL   = "https://api.thecatapi.com/";
const CAT_API_KEY   = "4c5fa1a6-51ae-44b7-85a5-4cf819d34e20"


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

        if (message.channelId != "995813086965538866") {
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

client.login('OTk1Njg5MTU4MjM4NTQzODgz.GU369L.45kb3mQJO-NmQ7-55Luw0CUaGN6mNAklGQz7iU');