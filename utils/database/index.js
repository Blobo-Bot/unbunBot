const Sequelize = require('sequelize');
module.exports = async (options = Object) => {
    let URL = await options.client.Tools.createURL();
    options.client.database = new Sequelize(URL, {
        define: {
            charset: 'utf8',
            collate: 'utf8_general_ci',
            timestamps: true
        },
        logging: false
    });

    await options.client.database.authenticate().then(async () => {
        options.client.logger('checking models. please wait...', 'warn')
        await require('./models')({
            client: options.client,
            Sequelize: Sequelize,
            database: options.client.database
        }).then(() => {
            options.client.logger('database conected !', 'log');
            options.client.logger('models checked !', 'log')
        })
    }).catch(O_o => {
        throw O_o;
    });
};