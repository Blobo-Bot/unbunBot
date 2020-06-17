module.exports = async (options) => {
    /** MODELS */
    try  {
        options.database.define('guild', {
            id: {
                type: options.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            guildID: {
                type: options.Sequelize.STRING(18),
                allowNull: false
            },
            prefix: {
                type: options.Sequelize.STRING(5),
                allowNull: false,
                defaultValue: options.client.configuration.base.prefix
            }
        });
        await options.client.database.sync();
        return options.client.models;
    } catch (e) {
        options.client.logger(e, 'error')
    }
};