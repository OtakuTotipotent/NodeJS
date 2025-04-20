const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
});

server.listen(port, () => {
  console.log(`Connection established. Visit the link: 'http://localhost:${port}'`);
});