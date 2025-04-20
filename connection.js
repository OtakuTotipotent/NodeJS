const HTTP = require("http");
const PORT = 3003;

const SERVER = HTTP.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  res.setHeader('Content-Type', 'text/html');
  res.write(`<html>
    <head> <title> Connection to Server </title>
    <body style="background-color: #222;"> <center> <h1 style="color: #0f0;"> Connection has been established to the server successfully! </h1> </body>
    </html>
    `);
  res.end();
});

SERVER.listen(PORT, () => {
  console.log(`Success: Server started at 'http://localhost:${PORT}'...`);
});