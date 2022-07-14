const axios = require('axios');
const Discord = require("discord.js");
const client = new Discord.Client({ intents: 32767 });

var ANIMAL_IMAGES_CHANNEL = process.env.ANIMAL_CHANNEL_ID;
var TOKEN = process.env.DISCORD_TOKEN;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

    console.log(
        "Currently set variables:\n" +
        "ANIMAL_CHANNEL_ID: " + ANIMAL_IMAGES_CHANNEL + "\n" +
        "TOKEN:" + TOKEN
    )

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

        if (message.channelId != ANIMAL_IMAGES_CHANNEL) {
            message.delete();
        } else {
            axios.get('https://aws.random.cat/meow.php').then(resp => { message.channel.send(resp.data.file) });
        }
        
    }
    
    // kangaroo images
    if (message.content === `${prefix}kangaroo`) {

        if (message.channelId != ANIMAL_IMAGES_CHANNEL) {
            message.delete();
        } else {
            axios.get('https://some-random-api.ml/img/kangaroo').then(resp => { message.channel.send(resp.data.link) });
        }
    }

    // cat facts
    if (message.content === `${prefix}catfact`) {

        if (message.channelId != ANIMAL_IMAGES_CHANNEL) {
            message.delete();
        } else {
            axios.get('https://catfact.ninja/fact').then(resp => { message.channel.send(resp.data.fact) });
        }

    }
    
    // dog facts
    if (message.content === `${prefix}dogfact`) {
        
        if (message.channelId != ANIMAL_IMAGES_CHANNEL) {
            message.delete();
        } else {
            axios.get('https://dog-api.kinduff.com/api/facts').then(resp => { message.channel.send(resp.data.facts[0]) });
        }
        
    }
    
    // panda facts
    if (message.content === `${prefix}pfact`) {
        
        if (message.channelId != ANIMAL_IMAGES_CHANNEL) {
            message.delete();
        } else {
            axios.get('https://some-random-api.ml/facts/panda').then(resp => { message.channel.send(resp.data.fact) });
        }
        
    }
    
    // bird facts
    if (message.content === `${prefix}birdfact`) {
        
        if (message.channelId != ANIMAL_IMAGES_CHANNEL) {
            message.delete();
        } else {
            axios.get('https://some-random-api.ml/facts/bird').then(resp => { message.channel.send(resp.data.fact) });
        }
        
    }
        
    // dog too
    if (message.content === `${prefix}dog`) {

        if (message.channelId != ANIMAL_IMAGES_CHANNEL) {
            message.delete();
        } else {
            axios.get('https://dog.ceo/api/breeds/image/random').then(resp => { message.channel.send(resp.data.message) });
        }
        
    }

    // fox becuse why not
    if (message.content === `${prefix}fox`) {

        if (message.channelId != ANIMAL_IMAGES_CHANNEL) {
            message.delete();
        } else {
            axios.get('https://randomfox.ca/floof/').then(resp => { message.channel.send(resp.data.image) });
        }
        
    }

    // quack quack
    if (message.content === `${prefix}duck`) {

        if (message.channelId != ANIMAL_IMAGES_CHANNEL) {
            message.delete();
        } else {
            axios.get('https://random-d.uk/api/random').then(resp => { message.channel.send(resp.data.url) });
        }
        
    }

    // uhh lizard
    if (message.content === `${prefix}lizard`) {

        if (message.channelId != ANIMAL_IMAGES_CHANNEL) {
            message.delete();
        } else {
            axios.get('https://nekos.life/api/v2/img/lizard').then(resp => { message.channel.send(resp.data.url) });
        }
        
    }

    // shiba uwu
    if (message.content === `${prefix}shiba`) {

        if (message.channelId != ANIMAL_IMAGES_CHANNEL) {
            message.delete();
        } else {
            axios.get('http://shibe.online/api/shibes').then(resp => { message.channel.send(resp.data[0]) });
        }
        
    }

    // red pandasssssssssssssssssss
    if (message.content === `${prefix}rpanda`) {

        if (message.channelId != ANIMAL_IMAGES_CHANNEL) {
            message.delete();
        } else {
            axios.get('https://some-random-api.ml/img/red_panda').then(resp => { message.channel.send(resp.data.link) });
        }
        
    }

    // hentai
    if (message.content === `${prefix}neko`) {

        axios.get('https://nekos.life/api/v2/img/neko').then(resp => { message.channel.send(resp.data.url) });

    }



    // repeats whatever the user says
    if (message.content.startsWith === `${prefix}say`) {

        var msgCnt = message.content.
        console.log(msgCnt);
        var sayCnt = msgCnt.split(' ');
        console.log(sayCnt);

    }

});

client.login(TOKEN);
