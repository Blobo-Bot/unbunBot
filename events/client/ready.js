module.exports = async (client) => {
  await client.logger(client.user.username, 'ready');
};