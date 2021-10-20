const express = require("express");
const app = express();

console.log(__dirname);

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/html/index.html`);
});
app.get("/css", (req, res) => {
  res.sendFile(`${__dirname}/css/style.css`);
});
app.get("/js", (req, res) => {
  res.sendFile(`${__dirname}/javascript/index.js`);
});

app.listen(8000, () => {
  console.log("The server is running!");
});
