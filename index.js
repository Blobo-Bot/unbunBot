const { Client, Collection } = require('discord.js'),
    client = new Client(),
    Tools = require('./utils/database/utils/Tools');

/** Client constants */
client.credentials = require('./settings/credentials');
client.configuration = require('./settings/configurations');
client.logger = require('./utils/logger').log;
client.Tools = new Tools({
    client: client
});
/**
 * @author Sora
 * @param options{Object}
 * @returns {Promise<void>}
 */
init = async (options) => {
    await require('./utils/database')({
        client: client
    })
    await client.login(client.credentials.base.token)
};

(async () => {
    await init({
        loadEvents: true,
        loadCommands: true,
        connectDatabase: true,
        connectDatabaseFirst: true
    });
})();