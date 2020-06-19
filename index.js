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
client.methods = require('./handlers/Methods');
client.monitors = require('./handlers/Monitors');
client.commands = new Collection();
client.aliases = new Collection();

/**
 * @author Sora
 * @returns {Promise<void>}
 */
init = async () => {
    await require('./utils/database')({
        client: client
    }).then(async () => {
        await require('./handlers/Events')({
            client: client,
            path: "./events/"
        });
        await require('./handlers/Commands')({
           client: client,
           path: "./commands/"
        });
        await client.login(client.credentials.base.token)
    });
};

(async () => {
    await init();
})();