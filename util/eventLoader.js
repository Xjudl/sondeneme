const ebubekir = (event) => require(`../events/${event}`);
module.exports = client => {
  client.on('message', ebubekir('message'));
};
