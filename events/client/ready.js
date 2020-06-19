module.exports = async (client) => {
  try {
    await client.methods.use('indexData', client);
    await client.logger(client.user.username, 'ready');
    await client.user.setActivity({
      name: client.configuration.presence.name,
      type: client.configuration.presence.type,
      url: client.configuration.presence.url
    }).then(async () => {
      await client.user.setStatus(client.configuration.presence.status);
    });
  }
  catch (e) {
    return client.logger(e, 'error')
  }
};