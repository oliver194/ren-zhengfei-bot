const axios = require('axios');
const Discord = require("discord.js");
const client = new Discord.Client({ intents: 32767 });
const { MessageEmbed } = require('discord.js');

var version = "1.1.3-b1";
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

        const BotInfoEmbed = new MessageEmbed()
            .setColor('584dff')
            .setTitle('About Ren Zhengfei')
            .setDescription('This bot was made by Val and oliver193.\nSource available on GitHub')
            .setTimestamp()
            .setFooter({ text: 'Version ' + version });
        message.channel.send({ embeds: [BotInfoEmbed] }); 

    }
    
    // cat image
    if (message.content === `${prefix}cat`) {

        if (message.channelId != ANIMAL_IMAGES_CHANNEL) {
            message.delete();
        } else {
            axios.get('https://aws.random.cat/meow').then(resp => { const CatImgEmbed = new MessageEmbed()
                .setColor('584dff')
                .setTitle('Cat image')
                .setImage(resp.data.file)
                .setTimestamp()
                .setFooter({ text: 'Powered by aws.random.cat'});
            message.channel.send({ embeds: [CatImgEmbed] });
            });
        }
        
    }

    // cat facts
    if (message.content === `${prefix}catfact`) {

        if (message.channelId != ANIMAL_IMAGES_CHANNEL) {
            message.delete();
        } else {
            axios.get('https://catfact.ninja/fact').then(resp => { const CatFactEmbed = new MessageEmbed()
                .setColor('584dff')
                .setTitle('Cat fact')
                .setDescription(resp.data.fact)
                .setTimestamp()
                .setFooter({ text: 'Powered by catfact.ninja'});
            message.channel.send({ embeds: [CatFactEmbed] });
            });
        }

    }

    // dog too
    if (message.content === `${prefix}dog`) {

        if (message.channelId != ANIMAL_IMAGES_CHANNEL) {
            message.delete();
        } else {
            axios.get('https://dog.ceo/api/breeds/image/random').then(resp => { const DogImgEmbed = new MessageEmbed()
                .setColor('584dff')
                .setTitle('Dog image')
                .setImage(resp.data.message)
                .setTimestamp()
                .setFooter({ text: 'Powered by dog.ceo'});
            message.channel.send({ embeds: [DogImgEmbed] });
            });
        }
        
    }

    // fox becuse why not
    if (message.content === `${prefix}fox`) {

        if (message.channelId != ANIMAL_IMAGES_CHANNEL) {
            message.delete();
        } else {
            axios.get('https://randomfox.ca/floof/').then(resp => { const FoxImgEmbed = new MessageEmbed()
                .setColor('584dff')
                .setTitle('Fox image')
                .setImage(resp.data.image)
                .setTimestamp()
                .setFooter({ text: 'Powered by randomfox.ca'});
            message.channel.send({ embeds: [FoxImgEmbed] });
            });
        }
        
    }

    // quack quack
    if (message.content === `${prefix}duck`) {

        if (message.channelId != ANIMAL_IMAGES_CHANNEL) {
            message.delete();
        } else {
            axios.get('https://random-d.uk/api/random').then(resp => { const DuckImgEmbed = new MessageEmbed()
                .setColor('584dff')
                .setTitle('Duck image')
                .setImage(resp.data.url)
                .setTimestamp()
                .setFooter({ text: 'Powered by random-d.uk'});
            message.channel.send({ embeds: [DuckImgEmbed] });
            });
        }
        
    }

    // uhh lizard
    if (message.content === `${prefix}lizard`) {

        if (message.channelId != ANIMAL_IMAGES_CHANNEL) {
            message.delete();
        } else {
            axios.get('https://nekos.life/api/v2/img/lizard').then(resp => { const LizardImgEmbed = new MessageEmbed()
                .setColor('584dff')
                .setTitle('Lizard image')
                .setImage(resp.data.url)
                .setTimestamp()
                .setFooter({ text: 'Powered by nekos.life'});
            message.channel.send({ embeds: [LizardImgEmbed] });
            });
        }
        
    }

    // shiba uwu
    if (message.content === `${prefix}shiba`) {

        if (message.channelId != ANIMAL_IMAGES_CHANNEL) {
            message.delete();
        } else {
            axios.get('https://shibe.online/api/shibes').then(resp => { const ShibaImgEmbed = new MessageEmbed()
                .setColor('584dff')
                .setTitle('Shiba image')
                .setImage(resp.data.url)
                .setTimestamp()
                .setFooter({ text: 'Powered by shibe.online'});
            message.channel.send({ embeds: [ShibaImgEmbed] });
            });
        }
        
    }

    // hentai
    if (message.content === `${prefix}neko`) {
        

        axios.get('https://nekos.life/api/v2/img/neko').then(resp => { const NekoImgEmbed = new MessageEmbed()
            .setColor('584dff')
            .setTitle('Neko image')
            .setImage(resp.data.url)
            .setTimestamp()
            .setFooter({ text: 'Powered by nekos.life'});
        message.channel.send({ embeds: [NekoImgEmbed] });
            });

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
