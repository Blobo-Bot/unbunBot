/**
 * @type {Tools}
 */
module.exports = class Tools {
    /**
     * @param options
     */
    constructor(options = Object) {
        /**
         * @type {Client | ObjectConstructor}
         */
        this.client = options.client;
        /**
         * @type {{password: string, database: string, usePassword: boolean, host: string, user: string}}
         */
        this.configuration = this.client.credentials.database;
    };

    /**
     * @returns {Promise<unknown>}
     */
    createURL() {
        return new Promise((resolve, reject) => {
            try {
                if (!this.configuration.usePassword) return resolve(`mysql://${this.configuration.user}@${this.configuration.host}:3306/${this.configuration.database}`);
                return resolve(`mysql://${this.configuration.user}:${this.configuration.password[0]}@${this.configuration.host}:3306/${this.configuration.database}`);
            } catch (O_o) {
                reject(O_o);
            }
        });
    }
};