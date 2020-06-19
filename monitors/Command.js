const {RichEmbed, Collection} = require('discord.js');

/**
 * @param client
 * @param message
 * @param command
 * @param args
 * @returns {Promise<void>}
 */
module.exports = async (client, message, command, args) => {
        await command.run(client, message, args);
};