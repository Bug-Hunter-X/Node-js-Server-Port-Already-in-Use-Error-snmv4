const http = require('http');
const findPort = require('find-free-port');

async function startServer() {
  const port = await findFreePort(8080, 8100); // Search for a free port between 8080 and 8100
  const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello, World!');
  });

  server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

startServer();