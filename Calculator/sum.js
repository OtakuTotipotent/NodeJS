const showSum = (req, res) => {

  const requestBody = [];

  req.on("data", chunk => requestBody.push(chunk));

  req.on("end", () => {
    const parameters = new URLSearchParams(Buffer.concat(requestBody).toString());
    const data = Object.fromEntries(parameters);
    const resultantSum = Number(data.num1) + Number(data.num2);

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
          <h2>${data.num1} + ${data.num2} = ${resultantSum}</h2>
          <a href="/">Back to calculator</a>
        </div>
      </body>
      </html>
      `);

    return res.end();
  });
}

exports.showSum = showSum;