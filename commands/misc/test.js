exports.run = async (client, message) => {
    message.delete().catch(O_o => {});
    return message.channel.send('Bip..Boup..');
};

module.exports.command = {
    name: 'test',
    aliases: ['test', 'sora'],
    info: {
        description: 'Juste a test commande ;)',
        usage: 'test'
    },
    args: false,
    cooldown: 5,
    unsafe: false,
    permLevel: 1,
    guildOnly: false
};