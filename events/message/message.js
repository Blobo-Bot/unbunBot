module.exports = async (client, message) => {
    try {
        if (message.author.bot) return;
        if (!message.guild) return require('../../handlers/privateMessages')(client, message);
        await client.database.models.guild.findOne({
            where: {
                guildID: message.guild.id
            }
        }).then(async (data) => {
            message.guild.data = data.dataValues;
        });
        if (!message.guild.data) return;
        const args = message.content.slice(message.guild.data.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
        if (message.content.match(prefixMention)) {
            return message.channel.send(`**- ${message.guild.name} Prefix : \`${message.guild.data.prefix}\`**`);
        }
        if (message.content.indexOf(message.guild.data.prefix) !== 0) return;
        if (message.guild && !message.member) await message.guild.members.fetch(message.author);

        let cmd;
        if (client.commands.has(command)) {
            cmd = client.commands.get(command);
        } else if (client.aliases.has(command)) {
            cmd = client.aliases.get(command);
        }
        if (!cmd) return;
        await client.monitors.use('Command', client, message, cmd, args);
    } catch (e) {
        return client.logger(e, 'error');
    }
};