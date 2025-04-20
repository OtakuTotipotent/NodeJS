const http = require("http");
const { requestHandler } = require("./handler");
const port = 3000;

const server = http.createServer(requestHandler);

server.listen(port, () => {
  console.log(`Connection established. Visit the link: 'http://localhost:${port}'`);
});