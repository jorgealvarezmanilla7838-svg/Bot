console.log("Archivo ejecutándose...");

require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once('ready', () => {
    console.log(`Bot conectado como ${client.user.tag}`);
});

client.on('messageCreate', (message) => {

    if (message.author.bot) return;

    if (message.content === '!hola') {
        message.reply('Hola 👋 Soy tu bot geek');
    }

    if (message.content.startsWith('!saga')) {

    const sagas = {
        lotr: "El Señor de los Anillos es una saga escrita por J.R.R. Tolkien sobre la lucha contra Sauron y el poder del Anillo Único.",
        avatar: "Avatar: La Leyenda de Aang sigue al último maestro aire que debe traer equilibrio al mundo.",
        cosmere: "El Cosmere es el universo compartido creado por Brandon Sanderson que conecta múltiples sagas."
    };

    const args = message.content.split(" ");
    const saga = args[1]?.toLowerCase();

    if (sagas[saga]) {
        message.reply(sagas[saga]);
    } else {
        message.reply("No conozco esa saga... todavía 👀");
    }
}



    if (message.content === '!ping') {
    message.reply('Pong 🏓');
    }




});

client.login(process.env.TOKEN);
