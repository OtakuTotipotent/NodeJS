const { showSum } = require('./sum');

const requestHandler = (req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Calculator</title>
        <link rel="stylesheet" href="./styles.css">
      </head>
      <body>
        <div class="calculator">
          <h2>Welcome!</h2>
          <a href="/calculator">Find Calculator...</a>
        </div>
      </body>
      </html>
    `);
    return res.end();
  }
  else if (req.url.toLowerCase() === '/calculator') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Calculator</title>
        <link rel="stylesheet" href="./styles.css">
      </head>
      <body>
        <div class="calculator">
          <h2>Online Calculator</h2>
          <form action="/calculateResult" method="POST">
            <input type="number" name="num1" id="num1" placeholder="First number">
            <input type="number" name="num2" id="num2" placeholder="Second number">
            <button type="submit">Sum</button>
          </form>
        </div>
      </body>
      </html>
      `);
    return res.end();
  }
  else if (req.url === '/calculateResult' && req.method === "POST") {
    return showSum(req, res);
  }

  res.setHeader('Content-Type', 'text/html');
  res.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Calculator</title>
        <link rel="stylesheet" href="./styles.css">
      </head>
      <body>
        <div class="calculator">
          <h2>404 : Page not found!</h2>
          <a href="/">Back to Homepage</a>
        </div>
      </body>
      </html>
    `);
  res.end();
}

exports.requestHandler = requestHandler;