module.exports = class Tools {
    constructor(options = Object) {
        this.client = options.client;
        this.configuration = this.client.credentials.database;
    };

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