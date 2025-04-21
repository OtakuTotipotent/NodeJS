const express = require("express");

const app = express();

// middlewares
app.use((req, res, next) => {
  console.log("Request path : ", req.url);
  next();
});

app.use((req, res, next) => {
  console.log("Request method : ", req.method);
  next();
});

app.get("/", (req, res, next) => {
  res.send("<h2>Hello! Welcome to the project homepage...");
  next();
});

app.get("/contact-us", (req, res, next) => {
  res.send(`
    <h3>Please fill in the following form fields carefully!</h3>
    <form action="/contact-us" method="POST">
      <input type="text" name="username" placeholder="Your username">
      <input type="email" name="email" placeholder="Your email address">
      <input type="submit" value="Submit">
    </form>
    `);
});

app.post("/contact-us", (req, res, next) => {
  res.send(`<h1>Hey! Nice to meet you.</h1>`);
})

app.listen(4000, () => {
  console.log("success: server connected to 'http://localhost:4000'");
});