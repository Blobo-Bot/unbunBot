module.exports = async (options) => {
    /** MODELS */
    try  {
        await options.client.database.sync();
        return options.client.models;
    } catch (e) {
        options.client.logger(e, 'error')
    }
};