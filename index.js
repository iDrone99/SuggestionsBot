const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

const client = new Client({ intents: [ GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent ] });

client.on('messageCreate', async message => {
    if (message.author.bot || message.channel.id !== `أيدي روم الإقتراحات`) return;
    const embed = new EmbedBuilder()
    .setColor(`لون الإيمبد`)
    .setAuthor({ name: `${message.guild.name}`, iconURL: message.guild.iconURL()})
    .setTitle(`New Suggestion`)
    .setDescription(`${message.content}`)
    .setFooter({ text: `${message.author.displayName}`, iconURL: message.author.avatarURL()});

    await message.channel.send({ embeds: [embed] }).then(async SuggestionMessage => {
    await SuggestionMessage.react(`✅`);
    await SuggestionMessage.react(`❌`);
    });
    await message.delete();
});
client.login(`توكن البوت`);