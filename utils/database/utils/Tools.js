module.exports = class Tools {
    constructor(options = Object) {
        this.client = options.client;
        this.configuration = this.client.credentials.database;
    };

    createURL() {
        return new Promise((resolve, reject) => {
            try {
                if (!this.configuration.usePass) return resolve(`mysql://${this.configuration.database.user}@${this.configuration.database.host}:3306/${this.configuration.database.database}`);
                return resolve(`mysql://${this.configuration.database.user}:${this.configuration.database.password[0]}@${this.configuration.database.host}:3306/${this.configuration.database.database}`);
            } catch (O_o) {
                reject(O_o);
            }
        });
    }
};