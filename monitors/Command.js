const {RichEmbed, Collection} = require('discord.js');

module.exports = async (client, message, command, args) => {
        await command.run(client, message, args);
};