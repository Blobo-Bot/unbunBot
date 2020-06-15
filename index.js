const { Client, Collection } = require('discord.js'),
    client = new Client();

/**
 * @author Sora
 * @param options{Object}
 * @returns {Promise<void>}
 */
init = async (options) => {};

(async () => {
    await init({
        client: client,
        loadEvents: true,
        loadCommands: true,
        connectDatabase: true,
        connectDatabaseFirst: true
    });
})();