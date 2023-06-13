const server = require('http');

const PORT = 1245;
const HOST_NAME = 'localhost';

const app = server.createServer();
app.on('request', (_, res) => {
  const mess = 'Hello Holberton School!';

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', mess.length);
  res.statusCode = 200;
  res.write(Buffer.from(mess));
});

app.listen(PORT, HOST_NAME, () => {
  process.stdout.write(`Server listening on http://${HOST_NAME}:${PORT}\n`);
});

module.exports = app;
