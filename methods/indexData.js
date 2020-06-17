module.exports = async (client) => {
    return new Promise(async (resolve, reject) => {
        try {
            let guilds = client.guilds.cache.map(g => g.id);
            for (let i = 0; i < guilds.length; i++) {
                let guildData = await client.database.models.guild.findOne({
                    where: {
                        guildID: guilds[i]
                    }
                });
                if (!guildData) {
                    await client.database.models.guild.create({
                            guildID: guilds[i]
                        }, {
                            fields: [ 'guildID' ]
                        });
                    client.logger(`ADD ${guilds[i]}`, 'log')
                }
            }
            await resolve('indexing...');
        }
        catch (e) {
            reject(e);
        }
    });
};
